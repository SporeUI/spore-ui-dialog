var $dialog = window['spore-ui-dialog'];
console.info('spore-ui-dialog:', $dialog);

$(function() {
	$('#tip-simple').on('click', function() {
		$dialog.tip('显示一段简单信息');
	});
});

