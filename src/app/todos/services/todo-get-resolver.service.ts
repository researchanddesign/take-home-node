import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from '../../../server/types';
import { TodosService } from './todos.service';

@Injectable()
export class TodoGetResolverService implements Resolve<ITodo> {
	constructor(private todosService: TodosService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodo> {
		return this.todosService.getTodo(route.params.id, route.params.listId);
	}
}
