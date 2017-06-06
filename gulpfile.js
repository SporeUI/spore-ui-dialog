const $gulp = require('gulp');
const $runSequence = require('run-sequence');

const $config = require('./config');
$config.production = false;

require('./task/build');
require('./task/clean');
require('./task/doc');
require('./task/lint');
require('./task/serve');
require('./task/tool');

// =================
// common tasks
// =================
$gulp.task('doc', () => {

	let queue = [
		'clean-doc',
		'doc-build',
		'doc-replace'
	];

	if (!$config.production) {
		queue.push('doc-watch');
	}

	return $runSequence.apply(null, queue);
});

$gulp.task('dist', () => {
	$config.production = true;
	return $runSequence(
		'clean-dev',
		'build-webpack',
		'clean-demo',
		'tool-copy2demo',
		'doc'
	);
});

$gulp.task('serve', () => {
	$config.development = true;
	return $runSequence(
		'lint-es',
		'clean-dev',
		'build-webpack',
		'tool-wait',
		'serve-mock',
		'serve-proxy',
		'serve-browserSync',
		'serve-devWatch'
	);
});

$gulp.task('default', [
	'serve'
]);

