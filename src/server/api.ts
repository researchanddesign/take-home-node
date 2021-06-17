import * as express from 'express';
import DB from './db';
import { ITodo } from './types';

export default express
	.Router()
	.get('/lists', async (req, res) => {
		const data = await (await DB.sharedInstance()).getLists();
		res.json({ data });
	})
	.get('/lists/:listId', async (req, res) => {
		const data = await (await DB.sharedInstance()).getList(Number(req.params.listId));
		res.json(data);
	})
	.get('/:listId/todos', async (req, res) => {
		const data = await (await DB.sharedInstance()).getTodos(Number(req.params.listId));
		res.json({ data });
	})
	.post('/:listId/todos', async (req, res) => {
		const data = await (await DB.sharedInstance()).addTodo(req.body.name, Number(req.body.listId));
		res.json(data);
	})
	.get('/:listId/todos/:todoId', async (req, res) => {
		const data = await (await DB.sharedInstance()).getTodo(Number(req.params.todoId));
		res.json(data);
	})
	.put('/:listId/todos/:todoId', async (req, res) => {
		const todo: ITodo = req.body as ITodo;
		todo.id = Number(req.params.todoId);
		const data = await (await DB.sharedInstance()).editTodo(todo);
		res.json(data);
	})
	.delete('/:listId/todos/:todoId', async (req, res) => {
		const data = await (await DB.sharedInstance()).deleteTodo(Number(req.params.todoId));
		res.json(data);
	});
