const $gulp = require('gulp');

// =================
// tools
// =================
// 用于解决 windows 下目录删除未及时完成的问题
$gulp.task('tool-wait', done => setTimeout(done, 1000));

$gulp.task(
	'tool-copy2demo',
	() => $gulp.src(['./dist/*']).pipe($gulp.dest('./demo/dist'))
);
