const $path = require('path');

const config = {};
config.root = $path.resolve(__dirname);
config.src = 'src';
config.dist = 'dist';
config.devServerPort = 8090;
config.mockServerPort = 8091;
config.proxyServerPort = 8092;
config.name = 'spore-ui-dialog';

module.exports = config;
