var local = 'http://localhost:8090';
var remote = 'http://spore-ui.github.io';

module.exports = [
	// 代理到 http://spore-ui.github.io/demo/index.html
	{
		pattern: new RegExp(remote + '/demo/index.html\\?*\\.*'),
		responder: local + '/demo'
	},
	{
		pattern: new RegExp(remote + '/demo/(.+)'),
		responder: local + '/$1'
	},
	{
		pattern: new RegExp(remote + '/api/(.+)'),
		responder: local + '/api/$1'
	},
	{
		pattern: new RegExp(remote + '/browser-sync/(.+)'),
		responder: local + '/assets/noop.js'
	}
];

