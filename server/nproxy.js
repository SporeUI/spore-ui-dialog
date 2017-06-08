var local = 'http://localhost:8090';
var remote = 'http://spore-ui.github.io';
var m_db_house = 'http://m.db.house.qq.com';

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
	},
	// 代理到最新开盘页面
	// http://m.db.house.qq.com/search/st_16/?ait=opendate&rf=newsapp&chlid=news_news_housebj
	{
		pattern: new RegExp(m_db_house + '/search/st_16/\\?(.+)'),
		responder: local + '/demo.html'
	},
	{
		pattern: new RegExp(m_db_house + '/search/st_16/assets/(.+)'),
		responder: local + '/assets/$1'
	},
	{
		pattern: new RegExp(m_db_house + '/search/st_16/dist/(.+)'),
		responder: local + '/dist/$1'
	},
	// 代理到计算器页面
	// http://m.db.house.qq.com/index.php?mod=calculator&type=gjj&rf=
	{
		pattern: new RegExp(m_db_house + '/index.php\\?mod=calculator(.+)'),
		responder: local + '/demo.html'
	},
	{
		pattern: new RegExp(m_db_house + '/assets/(.+)'),
		responder: local + '/assets/$1'
	},
	{
		pattern: new RegExp(m_db_house + '/dist/(.+)'),
		responder: local + '/dist/$1'
	},
	{
		pattern: new RegExp(m_db_house + '/browser-sync\/(.+)'),
		responder: local + '/demo/assets/noop.js'
	}
];

