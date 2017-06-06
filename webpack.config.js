const $path = require('path');
const $config = require('./config');

const webpackConfig = {
	entry: [
		'./index'
	],
	output: {
		path: $path.resolve($config.root, $config.dist),
		filename: $config.name + '.js',
		library: $config.name,
		libraryTarget: 'umd'
	},
	devtool: 'source-map',
	target: 'web',
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader'
			]
		}, {
			test: /\.less$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				'less-loader'
			]
		}, {
			test: /\.pug$/,
			use: [{
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			}]
		}]
	},
	plugins: [

	]
};

module.exports = webpackConfig;
