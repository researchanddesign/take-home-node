import 'zone.js/dist/zone-node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import ApiServer from './src/server/api';

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
	const server = express();
	if (process.env.NODE_ENV === 'production') {
		const distFolder = join(process.cwd(), 'dist/take-home-frontend/browser');
		const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

		// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
		server.engine(
			'html',
			ngExpressEngine({
				bootstrap: AppServerModule
			})
		);

		server.set('view engine', 'html');
		server.set('views', distFolder);

		// Serve static files from /browser
		server.get(
			'*.*',
			express.static(distFolder, {
				maxAge: '1y'
			})
		);

		// All regular routes use the Universal engine
		server.get('*', (req, res) => {
			res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
		});
	}

	server.use('/api', ApiServer);

	return server;
}

function run() {
	const port = process.env.PORT || 4000;
	console.log('here', port);

	// Start up the Node server
	const server = app();
	server.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}

run();

export * from './src/main.server';
