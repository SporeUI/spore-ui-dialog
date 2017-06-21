# spore-ui-dialog
基本对话框UI

## Getting Started
```shell
npm i --save spore-ui-dialog
```

```javascript
var $dialog = require('spore-ui-dialog');
$dialog.tip('提示文案');
```

## 参考资源

https://github.com/CodeSeven/toastr
依赖jQuery, 默认显示在右上角

https://github.com/aui/artDialog
依赖jQuery, 默认样式不好看，得处理下

https://github.com/t4t5/sweetalert
默认样式惊艳，就是界面有点大

https://github.com/HubSpot/vex
可以开启一批对话框，展示时间旅行效果

https://github.com/sentsin/layer
国内经典万用对话框


## Release History

 * 2017-06-13 v0.1.2 cssnano 会压缩动画名称，通过调整JS避免动画效果被清除
 * 2017-06-08 v0.1.1 解决对话框位置浏览器兼容性问题
 * 2017-06-06 v0.1.0 第一个正式版本
