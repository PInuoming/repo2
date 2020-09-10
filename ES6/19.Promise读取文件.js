// 详情去看node.js的 03.读取文件.js
// 1.使用 require 方法加载 fs 核心模块
const fs = require('fs');

// 2.调用方法读取文件
// fs.readFile('你好.txt', (error, data) => {
// 	// 如果失败，则抛出错误
// 	if(error) throw error;
// 	// 如果成功，则输出内容
// 	console.log(data.toString());
// });


// 3.使用 promise 封装
const p = new Promise(function(resolve, reject) {
	fs.readFile('你好.txt', (error, data) => {
		// 如果失败
		if(error) reject(error);
		// 如果成功
		resolve(data);
	});
});

p.then(value => {
	console.log(value.toString());
}, reason => {
	console.log(reason);
})