import * as express from 'express';
import DB from './db';

export default express.Router().get('/lists', async (req, res) => {
	console.log('router');
	const data = await (await DB.sharedInstance()).getLists();
	res.json({ data });
});
