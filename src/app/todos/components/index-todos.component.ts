import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TodosService } from '../services/todos.service';
import { IList, ITodo } from '../../../server/types';
import { ConfirmDeleteTodoDialogComponent } from './confirm-delete-todo-dialog.component';

@Component({
	selector: 'app-index-todos',
	templateUrl: '../views/index-todos.component.html'
})
export class IndexTodosComponent implements OnInit {
	todos: ITodo[];
	list: IList;

	constructor(
		private _router: Router,
		private _route: ActivatedRoute,
		private todosService: TodosService,
		public dialog: MatDialog
	) {}

	ngOnInit() {
		this.list = this._route.snapshot.data.list;
		this.getTodos();
	}

	confirmDelete(todoId: number) {
		const dialogRef = this.dialog.open(ConfirmDeleteTodoDialogComponent);

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.todosService.deleteTodo(todoId, this.list.id).subscribe(() => {
					this.getTodos();
				});
			}
		});
	}

	private getTodos() {
		this.todosService.getTodos(this.list.id).subscribe((data: ITodo[]) => {
			this.todos = data;
		});
	}
}
