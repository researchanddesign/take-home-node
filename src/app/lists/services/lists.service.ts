import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ErrorHandlerService } from '../../_shared/services/error-handler.service';
import { IList } from '../../../server/types';

@Injectable()
export class ListsService {
	private static LISTS_URL = `${environment.apiUrl}/lists`;

	constructor(private _http: HttpClient, private _errorHandler: ErrorHandlerService) {}

	getLists(): Observable<IList[]> {
		return this._http.get<any>(`${ListsService.LISTS_URL}`).pipe(
			map(response => response.data as IList[]),
			catchError(error => this._errorHandler.handleError(error))
		);
	}

	getList(listId: number): Observable<IList> {
		return this._http.get<any>(`${ListsService.LISTS_URL}/${listId}`).pipe(
			map(response => response as IList),
			catchError(error => this._errorHandler.handleError(error))
		);
	}
}
