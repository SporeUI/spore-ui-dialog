const $autoprefixer = require('autoprefixer');
const $flexfix = require('postcss-flexbugs-fixes');

module.exports = {
	plugins: [
		$autoprefixer(),
		$flexfix()
	]
};

