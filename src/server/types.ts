export interface IList {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	todos?: ITodo[];
}

export interface ITodo {
	id: number;
	mame: string;
	listId: number;
	createdAt: string;
	updatedAt: string;
	list?: IList;
}
