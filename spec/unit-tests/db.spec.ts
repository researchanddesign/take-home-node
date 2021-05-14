import 'jasmine';

import DB from '../../src/server/db';

describe('Take home project', () => {
	describe('Sample test', () => {
		it('should be true', async () => {
			expect(1).toBe(1);
			const database = await DB.sharedInstance();
			const lists = await database.getLists();
			expect(lists.length).toBe(0);
		});
	});
});
