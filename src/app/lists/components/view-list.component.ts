import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListsService } from '../services/lists.service';
import { IList } from '../../../server/types';

@Component({
	selector: 'app-list-view',
	templateUrl: '../views/view-list.component.html'
})
export class ViewListComponent implements OnInit {
	constructor(private _router: Router, private listsService: ListsService) {}

	list: IList;

	ngOnInit() {
		//
	}
}
