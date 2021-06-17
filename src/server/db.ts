import * as Knex from 'knex';

import { IList, ITodo } from './types';

export default class DB {
	public static db: DB;

	private static TABLE_LIST = 'list';
	private static TABLE_TODO = 'todo';

	private connection: Knex;

	public static async sharedInstance(): Promise<DB> {
		if (!this.db) {
			const dbPath = process.env.NODE_ENV === 'test' ? './test.sqlite' : './dev.sqlite';
			this.db = new DB(dbPath);
			await this.db.migrate();
		}
		return this.db;
	}

	public getLists(search?: string): Promise<IList[]> {
		return this.connection.select().from(DB.TABLE_LIST);
	}

	public getList(id: number): Promise<IList[]> {
		return this.connection
			.select()
			.from(DB.TABLE_LIST)
			.where({ id })
			.first();
	}

	public addList(name: string): Promise<void> {
		const now = new Date().toISOString();
		return this.connection(DB.TABLE_LIST).insert({
			name,
			createdAt: now,
			updatedAt: now
		});
	}

	/** TODO: editList */

	public deleteList(id: number): Promise<void> {
		return this.connection(DB.TABLE_LIST)
			.where({ id })
			.delete();
	}

	public deleteLists(): Promise<void> {
		return this.connection(DB.TABLE_LIST).delete();
	}

	public getTodos(listId: number, search?: string): Promise<ITodo[]> {
		return this.connection
			.select()
			.from(DB.TABLE_TODO)
			.where({ listId });
	}

	public getTodo(id: number): Promise<IList[]> {
		return this.connection
			.select()
			.from(DB.TABLE_TODO)
			.where({ id })
			.first();
	}

	public deleteTodo(id: number): Promise<void> {
		return this.connection(DB.TABLE_TODO)
			.where({ id })
			.delete();
	}

	public editTodo(todo: ITodo): Promise<void> {
		const id = todo.id;
		return this.connection(DB.TABLE_TODO)
			.where({ id })
			.update(todo);
	}

	public addTodo(name: string, listId: number): Promise<void> {
		const now = new Date().toISOString();
		return this.connection(DB.TABLE_TODO).insert({
			name,
			listId,
			createdAt: now,
			updatedAt: now
		});
	}

	private constructor(dbPath: string) {
		this.connection = Knex({
			client: 'sqlite3',
			connection: {
				filename: dbPath
			}
		});
	}

	private migrate(): Promise<void> {
		return this.connection.migrate.latest();
	}
}
