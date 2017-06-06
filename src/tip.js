var $tipbox = require('./tipbox/index');

var tipbox = null;

function showTip(msg, options) {
	var conf = $.extend({
		styles: {},
		duration: 2000
	}, options);

	if (!tipbox) {
		tipbox = new $tipbox();
	}

	tipbox.show(msg, {
		animation: 'sui-tip-fx ' + conf.duration + 'ms ease-in-out'
	});

	if (tipbox.timer) {
		clearTimeout(tipbox.timer);
		tipbox.timer = null;
	}
	tipbox.timer = setTimeout(function() {
		tipbox.hide();
	}, conf.duration);
}

module.exports = showTip;
