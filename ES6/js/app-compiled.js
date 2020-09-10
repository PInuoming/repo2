"use strict";

var _m = require("./m1-compiled.js");

var m1 = _interopRequireWildcard(_m);

var _m2 = require("./m2-compiled.js");

var m2 = _interopRequireWildcard(_m2);

var _m3 = require("./m3-compiled.js");

var m3 = _interopRequireWildcard(_m3);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// 相当于 const $ = require("jquery");
// 入口文件

// 模块引入
(0, _jquery2.default)('body').css('backgroundColor', 'pink');
// console.log(m1);
// console.log(m2);
// console.log(m3);

// 修改背景颜色
// ES6导入npm包的语法
