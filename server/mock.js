const $config = require('../config');

module.exports = {
	root: $config.root,
	port: $config.mockServerPort,

	mock: './mock',

	template: './demo',

	// 链接列表，用于显示到首页
	links: [
		{
			href: 'http://{{publicIp}}:' + $config.mockServerPort,
			text: 'Mock服务 http://{{publicIp}}:' + $config.mockServerPort
		},
		{
			href: 'http://{{publicIp}}:' + $config.proxyServerPort,
			text: '代理服务 http://{{publicIp}}:' + $config.proxyServerPort
		}
	],

	// 二维码链接列表，用于显示到 mock 服务首页
	qrlinks: [{
		href: 'http://{{publicIp}}:' + $config.devServerPort,
		text: '开发服务 http://{{publicIp}}:' + $config.devServerPort
	}],

	// 指定静态文件路径
	statics: [
		{
			route: '/jsdoc',
			path: 'jsdoc'
		},
		{
			route: '/dist',
			path: $config.dist
		},
		'demo'
	]
};

