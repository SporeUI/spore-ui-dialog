const $gulp = require('gulp');
const $gulpUtil = require('gulp-util');
const $gulpWatch = require('gulp-watch');
const $crossSpawn = require('cross-spawn');
const $browserSync = require('browser-sync');
const $gulpReplace = require('gulp-replace');
const $runSequence = require('run-sequence');
const $delay = require('spore-kit-fn/src/delay');

const $config = require('../config');
const $package = require('../package.json');

// 监听延迟，延迟 timeout 时间后执行任务
// 过程中任何再次调用都会重启计时器
// 确保间隔超出 timeout 后再调用任务
let watchDelay = (files, tasks, timeout) => {
	var info = [$gulpUtil.colors.yellow('watch changed:')].concat(files);
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
// doc
// =================

$gulp.task('doc-reload', () => $browserSync.reload());


$gulp.task('doc-replace', () => {
	return $gulp.src(
		'jsdoc/styles/jsdoc.css'
	).pipe(
		$gulpReplace(
			(/(pre.prettyprint\s*\{\n*[^\{\}]+\n*\})/mg),
			'$1\n.prettyprint {\n  tab-size:2rem;\n}'
		)
	).pipe($gulp.dest(
		'jsdoc/styles'
	));
});

$gulp.task('doc-build', () => {
	$crossSpawn.sync('./node_modules/.bin/jsdoc', [
		'-c',
		'jsdoc.json'
	], {
		stdio: 'inherit'
	});
});

$gulp.task('doc-watch', done => {
	watchDelay(
		[
			'./README.md',
			'./index.js',
			'./src/**/*'
		],
		() => {
			$runSequence(
				'clean-doc',
				'doc-build',
				'doc-replace',
				'doc-reload'
			);
		}
	);

	done();
});

$gulp.task('doc-mdupdate', () => {
	return $gulp.src(
		'./README.MD'
	).pipe(
		$gulpReplace(
			new RegExp('(mat1.gtimg.com[\\w-/]+' + $config.name + ')/(v[\\d.]+)/(dist)', 'mg'),
			'$1/v' + $package.version + '/$3'
		)
	).pipe($gulp.dest(
		'./'
	));
});

