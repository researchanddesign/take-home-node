import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './todos/components/create-todo.component';
import { IndexListsComponent } from './lists/components/index-lists.component';
import { ListsGetResolverService } from './lists/services/lists-get-resolver.service';
import { ViewListComponent } from './lists/components/view-list.component';
import { ListGetResolverService } from './lists/services/list-get-resolver.service';
import { IndexTodosComponent } from './todos/components/index-todos.component';
import { TodoGetResolverService } from './todos/services/todo-get-resolver.service';
import { EditTodoComponent } from './todos/components/edit-todo.component';

const routes: Routes = [
	{
		path: 'lists',
		component: IndexListsComponent
	},
	{
		path: 'list/:listId',
		component: ViewListComponent
	},
	{
		path: ':listId/todos/create',
		component: CreateTodoComponent,
		resolve: { lists: ListsGetResolverService }
	},
	{
		path: ':listId/todos/:id/edit',
		component: EditTodoComponent,
		resolve: { todo: TodoGetResolverService, lists: ListsGetResolverService }
	},
	{
		path: ':listId/todos',
		component: IndexTodosComponent,
		resolve: { list: ListGetResolverService }
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabled'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
