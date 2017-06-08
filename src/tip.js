var $tipbox = require('./tipbox/index');

var tipbox = null;

function showTip(msg, options) {
	var conf = $.extend({
		parentNode: null,
		top: '',
		bottom: '',
		zIndex: '',
		duration: 2000
	}, options);

	if (!tipbox) {
		tipbox = new $tipbox();
	}

	var styles = {
		box: {},
		content: {}
	};
	styles.content.animation = 'sui-tip-fx ' + conf.duration + 'ms ease-in-out';

	if (conf.top) {
		styles.content['vertical-align'] = 'top';
		styles.content['margin-top'] = conf.top;
	} else if (conf.bottom) {
		styles.content['vertical-align'] = 'bottom';
		styles.content['margin-bottom'] = conf.bottom;
	}

	if (conf.zIndex) {
		styles.box['z-index'] = conf.zIndex;
	}

	var parentNode = null;
	var curParent = tipbox.root.get(0).parentNode;
	if (conf.parentNode) {
		parentNode = $(conf.parentNode).get(0);
	}

	if (parentNode) {
		styles.box.position = 'absolute';
		tipbox.root.appendTo(parentNode);
	} else if (curParent !== document.body) {
		tipbox.root.appendTo(document.body);
	}

	tipbox.show(msg, styles);

	if (tipbox.timer) {
		clearTimeout(tipbox.timer);
		tipbox.timer = null;
	}
	tipbox.timer = setTimeout(function() {
		tipbox.hide();
	}, conf.duration);
}

module.exports = showTip;
