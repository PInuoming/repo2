const fs = require('fs');

function read1() {
	return new Promise((resolve, reject) => {
		fs.readFile("./你好.txt", (error, data) => {
			if(error) reject(error);
			resolve(data);
		})
	})
}

function read2() {
	return new Promise((resolve, reject) => {
		fs.readFile("./我好.txt", (error, data) => {
			if(error) reject(error);
			resolve(data);
		})
	})
}

function read3() {
	return new Promise((resolve, reject) => {
		fs.readFile("./大家好.txt", (error, data) => {
			if(error) reject(error);
			resolve(data);
		})
	})
}

async function main() {
	let result1 = await read1();
	let result2 = await read2();
	let result3 = await read3();
	console.log(result1.toString());
	console.log(result2.toString());
	console.log(result3.toString());
}
main();