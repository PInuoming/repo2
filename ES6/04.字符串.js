// 1.多了两个新方法：startsWith endsWith

let str = 'http://www.hao123.com';
if(str.startsWith('http://')) {
	console.log('普通网址');
}else if(str.startsWith('https://')) {
	console.log('加密网址');
}else if(str.startsWith('git://')) {
	console.log('git地址');
}else if(str.startsWith('svn://')) {
	console.log('svn地址');
}else {
	console.log('其它');
}

let file = '1.txt';
if(file.endsWith('txt')) {
	console.log('文本文件');
}else if(file.endsWith('js')) {
	console.log('js文件');
}else if(file.endsWith('php')) {
	console.log('php文件');
}else if(file.endsWith('jpg')) {
	console.log('图片');
}else {
	console.log('其它');
}

// 2.字符串模板
let a = 800;
let x = `a${a}bc`;
console.log(x);

let title = '标题';
let content = '内容';
let str2 = `<div>
<h1>${title}</h1>
<p>${content}</p>
</div>`;
console.log(str2);