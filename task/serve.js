const $gulp = require('gulp');
const $gulpUtil = require('gulp-util');
const $sporeMock = require('spore-mock');
const $gulpWatch = require('gulp-watch');
const $crossSpawn = require('cross-spawn');
const $browserSync = require('browser-sync');
const $delay = require('spore-kit-fn/src/delay');

const $config = require('../config');

// 监听延迟，延迟 timeout 时间后执行任务
// 过程中任何再次调用都会重启计时器
// 确保间隔超出 timeout 后再调用任务
let watchDelay = (files, tasks, timeout) => {
	let info = [$gulpUtil.colors.yellow('watch changed:')].concat(files);
	info = info.join('\n');

	timeout = timeout || 100;

	$gulpWatch(files, $delay(() => {
		$gulpUtil.log(info);
		if (typeof tasks === 'function') {
			tasks();
		} else {
			$gulp.run(tasks);
		}
	}, timeout));
};

// =================
// serve
// =================

$gulp.task('serve-mock', done => {
	$sporeMock({
		configFilePath: './server/mock.js'
	});
	done();
});


$gulp.task('serve-proxy', done => {
	$crossSpawn('nproxy', [
		'-l',
		'./server/nproxy.js',
		'-p',
		$config.proxyServerPort
	], {
		stdio: 'inherit'
	});
	done();
});

$gulp.task('serve-browserSync', done => {
	$browserSync.init({
		proxy: {
			target: '127.0.0.1:' + $config.mockServerPort
		},
		startPath: '/',
		ghostMode: false,
		injectChanges: true,
		port: $config.devServerPort
	});
	done();
});

$gulp.task('serve-devWatch', done => {

	watchDelay(
		[
			'./index.html',
			'./dist/**/*',
			'./demo/**/*'
		],
		() => {
			$browserSync.reload();
		}
	);

	done();
});

