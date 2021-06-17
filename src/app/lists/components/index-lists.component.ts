import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListsService } from '../services/lists.service';
import { IList } from '../../../server/types';

@Component({
	selector: 'app-lists-index',
	styleUrls: ['../views/lists-index.component.css'],
	templateUrl: '../views/lists-index.component.html'
})
export class IndexListsComponent implements OnInit {
	constructor(private _router: Router, private listsService: ListsService) {}

	lists: IList[];

	ngOnInit() {
		this.listsService.getLists().subscribe((data: IList[]) => {
			this.lists = data;
		});
	}
}
