const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	webpack: (config, options, webpack) => {
		config.entry.main = ['./server.ts'];

		config.resolve = {
			extensions: ['.ts', '.js', '.json']
		};

		config.plugins.push(new CopyWebpackPlugin([], options));

		// HACK: https://github.com/felixge/node-formidable/issues/337#issuecomment-153408479
		config.plugins.push(new webpack.DefinePlugin({ 'global.GENTLY': false }));

		config.module.rules.push({
			test: /\.ts$/,
			loader: 'ts-loader'
		});

		return config;
	}
};
