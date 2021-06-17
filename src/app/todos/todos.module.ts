import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ListsGetResolverService } from '../lists/services/lists-get-resolver.service';
import { ListGetResolverService } from '../lists/services/list-get-resolver.service';
import { TodosService } from './services/todos.service';
import { CreateTodoComponent } from './components/create-todo.component';
import { ViewTodoComponent } from './components/view-todo.component';
import { TodoGetResolverService } from './services/todo-get-resolver.service';
import { IndexTodosComponent } from './components/index-todos.component';
import { EditTodoComponent } from './components/edit-todo.component';
import { ConfirmDeleteTodoDialogComponent } from './components/confirm-delete-todo-dialog.component';

@NgModule({
	imports: [
		MatFormFieldModule,
		MatSelectModule,
		CommonModule,
		FormsModule,
		MatInputModule,
		MatButtonModule,
		ReactiveFormsModule,
		RouterModule,
		MatTableModule,
		MatDialogModule
	],
	declarations: [
		CreateTodoComponent,
		ViewTodoComponent,
		IndexTodosComponent,
		EditTodoComponent,
		ConfirmDeleteTodoDialogComponent
	],
	providers: [TodosService, FormBuilder, ListsGetResolverService, TodoGetResolverService, ListGetResolverService],
	exports: []
})
export class TodosModule {}
