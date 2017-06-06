const $gulp = require('gulp');
const $gulpEslint = require('gulp-eslint');

const $config = require('../config');
const $eslintrc = require('../.eslintrc');

$gulp.task('lint-es', () => {
	// gulp-eslint 所需的 globals 配置必须为一个数组
	// 而编辑器所需的 .eslingrc 配置中的 globals 必须为一个对象
	if ($eslintrc.globals && !Array.isArray($eslintrc.globals)) {
		$eslintrc.globals = Object.keys($eslintrc.globals);
	}

	return $gulp.src([
		'**/*.js'
	], {
		cwd: $config.src,
		base: $config.src
	}).pipe(
		$gulpEslint($eslintrc)
	).pipe(
		$gulpEslint.formatEach('compact', process.stderr)
    ).pipe(
		$gulpEslint.failAfterError()
    );
});
