import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodosService } from '../services/todos.service';
import { IList, ITodo } from '../../../server/types';

@Component({
	selector: 'app-view-todo',
	templateUrl: '../views/view-todo.component.html'
})
export class ViewTodoComponent implements OnInit {
	todo: ITodo;
	lists: IList[];
	listId: number;
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
		this.todoForm = this._formBuilder.group({
			name: [this.todo ? this.todo.name : '', [Validators.required, Validators.maxLength(100)]],
			listId: [this.todo ? this.todo.listId : '', [Validators.required]]
		});

		this.lists = this._route.snapshot.data.lists;
	}

	submit(formData: any) {
		if (!this.todoForm.valid) {
			return;
		}
		this.todosService.createTodo(formData).subscribe(
			() => {
				console.log('saved');
			},
			error => {
				console.log(error as any);
			}
		);
	}
	onSubmit(formData: any) {
		if (this.todo) {
			// this.todosService.updateEmail(formData, this.todo.id).subscribe(
			// 	() => {
			// 		this._sharedData.addMessage({
			// 			severity: 'info',
			// 			summary: 'Success',
			// 			detail: 'The email has been updated'
			// 		});
			// 		this.onFormSubmitted.emit(true);
			// 	},
			// 	error => {
			// 		this.onFormSubmitted.emit(false);
			// 		console.log(<any>error);
			// 	}
			// );
		} else {
			// Create a new email with the provided form information
			this.todosService.createTodo(formData).subscribe(
				() => {
					console.log('saved');
				},
				error => {
					console.log(error as any);
				}
			);
		}
	}

	todoSaved(savedStatus: boolean) {
		if (savedStatus) {
			this._router.navigate(['/todos']);
		}
	}
}
