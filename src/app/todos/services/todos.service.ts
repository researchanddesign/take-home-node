import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ErrorHandlerService } from '../../_shared/services/error-handler.service';
import { ITodo } from '../../../server/types';

@Injectable()
export class TodosService {
	private static TODOS_URL = `${environment.apiUrl}/:listId/todos`;
	private static TODOS_UPDATE_URL = `${environment.apiUrl}/:listId/todos/:id`;

	constructor(private _http: HttpClient, private _errorHandler: ErrorHandlerService) {}

	getTodos(listId: number): Observable<ITodo[]> {
		return this._http.get<any>(TodosService.TODOS_URL.replace(':listId', listId.toString())).pipe(
			map(response => response.data as ITodo[]),
			catchError(error => this._errorHandler.handleError(error))
		);
	}

	createTodo(todo: any): Observable<any> {
		return this._http.post(TodosService.TODOS_URL.replace(':listId', todo.listId.toString()), todo).pipe(
			map(response => response),
			catchError(error => this._errorHandler.handleError(error))
		);
	}

	getTodo(todoId: number, listId: number): Observable<ITodo> {
		return this._http
			.get<any>(TodosService.TODOS_UPDATE_URL.replace(':listId', listId.toString()).replace(':id', todoId.toString()))
			.pipe(
				map(response => response as ITodo),
				catchError(error => this._errorHandler.handleError(error))
			);
	}

	updateTodo(todoId: number, todo: any) {
		return this._http
			.put(
				TodosService.TODOS_UPDATE_URL.replace(':listId', todo.listId.toString()).replace(':id', todoId.toString()),
				todo
			)
			.pipe(
				map(response => response),
				catchError(error => this._errorHandler.handleError(error))
			);
	}

	deleteTodo(todoId: number, listId: number): Observable<ITodo> {
		return this._http
			.delete<any>(
				TodosService.TODOS_UPDATE_URL.replace(':listId', listId.toString()).replace(':id', todoId.toString())
			)
			.pipe(catchError(error => this._errorHandler.handleError(error)));
	}
}
