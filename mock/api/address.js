var $ip = require('ip');

module.exports = function(req, res) {
	var data = {};

	var ip = $ip.address('public');
	var url = req.headers.referer;
	url = url.replace(
		'localhost',
		ip
	).replace(
		'127.0.0.1',
		ip
	).replace(
		'0.0.0.0',
		ip
	);

	data.url = url;

	return data;
};
