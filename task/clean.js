const $del = require('del');
const $gulp = require('gulp');

// =================
// clean files
// =================
$gulp.task('clean-dev', () => $del([ './dist/', './online/']));

$gulp.task('clean-demo', () => $del([ './demo/dist/']));

// clean node_modules, fix windows file name to long bug..
$gulp.task('clean-mod', () => $del('./node_modules'));

$gulp.task('clean-doc', () => $del(['./jsdoc/']));
