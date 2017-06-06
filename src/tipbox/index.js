require('./index.less');

var TPL = '<div class="sui-tip"></div>';
var CLASS_SHOW = 'sui-tip-show';

function TipBox() {
	this.root = $(TPL);
	this.root.appendTo(document.body);
}

TipBox.prototype = {
	show: function(text, styles) {
		var that = this;
		styles = styles || {};
		this.hide();
		this.root.css(styles).html(text);
		setTimeout(function() {
			that.root.addClass(CLASS_SHOW);
			that = null;
		}, 20);
	},
	hide: function() {
		this.root.removeClass(CLASS_SHOW);
	}
};

module.exports = TipBox;

