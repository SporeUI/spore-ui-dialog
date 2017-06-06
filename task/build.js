const $gulp = require('gulp');
const $webpack = require('webpack');
const $gulpUtil = require('gulp-util');
const $cloneDeep = require('lodash/cloneDeep');
const $vConsolePlugin = require('vconsole-webpack-plugin');

const $config = require('../config');
const $webpackConfig = require('../webpack.config');

// =================
// pack
// =================
$gulp.task('build-webpack', done => {

	let originConf = $webpackConfig;
	let productionConf = $cloneDeep($webpackConfig);

	productionConf.output.filename = $config.name + '.min.js';

	productionConf.plugins.push(
		new $webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: false
			}
		})
	);

	if (!$config.production) {
		originConf.watch = true;
		productionConf.watch = true;

		originConf.plugins.push(
			new $vConsolePlugin({
				enable: true
			})
		);
	}

	let doneIsCalled = false;

	// webpack2 用多个 webpack conf 来实现多个文件的输出
	$webpack([
		originConf,
		productionConf
	], (err, stats) => {
		if (err) {
			$gulpUtil.log($gulpUtil.colors.red('[Error]'), err);
		} else {
			$gulpUtil.log(stats.toString({
				chunks: false,
				colors: $gulpUtil.colors.supportsColor
			}));
		}

		if (!doneIsCalled) {
			doneIsCalled = true;
			done();
		}
	});
});

