import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IList } from '../../../server/types';
import { ListsService } from './lists.service';

@Injectable()
export class ListsGetResolverService implements Resolve<IList[]> {
	constructor(private listsService: ListsService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IList[]> {
		return this.listsService.getLists();
	}
}
