import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodosService } from '../services/todos.service';
import { IList, ITodo } from '../../../server/types';

@Component({
	selector: 'app-edit-todo',
	templateUrl: '../views/edit-todo.component.html'
})
export class EditTodoComponent implements OnInit {
	todo: ITodo;
	lists: IList[];
	listId: number;
	todoId: number;
	todoForm: FormGroup;
	selectedValue: number;

	constructor(
		private _router: Router,
		private _route: ActivatedRoute,
		private todosService: TodosService,
		protected _formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.listId = Number(this._route.snapshot.paramMap.get('listId'));
		this.todoId = Number(this._route.snapshot.paramMap.get('id'));
		this.lists = this._route.snapshot.data.lists;
		this.todo = this._route.snapshot.data.todo;
		this.todoForm = this._formBuilder.group({
			name: [this.todo ? this.todo.name : '', [Validators.required, Validators.maxLength(100)]],
			listId: [this.todo ? this.todo.listId : '', [Validators.required]]
		});
	}

	submit(formData: any) {
		if (!this.todoForm.valid) {
			return;
		}
		this.todosService.updateTodo(this.todoId, formData).subscribe(
			() => {
				this._router.navigate(['/', this.listId, 'todos']);
			},
			error => {
				console.log(error as any);
			}
		);
	}
}
