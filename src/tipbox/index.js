require('./index.less');

var TPL = [
	'<div class="sui-tip">',
	'  <div role="content" class="sui-tip-content"></div>',
	'</div>'
].join('');

var CLASS_SHOW = 'sui-tip__show';

function cleanStyles(styles) {
	styles = styles || {};
	Object.keys(styles).forEach(function(key) {
		styles[key] = '';
	});
	return styles;
}

function TipBox() {
	this.root = $(TPL);
	this.root.appendTo(document.body);
}

TipBox.prototype = {
	show: function(text, styles) {
		var that = this;
		var contentNode = this.root.find('[role="content"]');

		styles = styles || {};
		this.hide();

		if (this.prevStyles) {
			this.root.css(cleanStyles(this.prevStyles.box));
			contentNode.css(cleanStyles(this.prevStyles.content));
		}

		this.root.css(styles.box);
		contentNode.css(styles.content).html(text);

		this.prevStyles = styles;

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

