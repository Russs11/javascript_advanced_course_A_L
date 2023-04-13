'use strict'

// let weatherMap = new Map([
// 	['London', 10],
// 	['Moscow', 7],
// 	['Paris', 14],

// ]);
// // let weatherMap2 = new Map()
// // for (const [key, value] of weatherMap) {
// // 	weatherMap2.set(value, key)
// // }
// weatherMap =  new Map([...weatherMap].map(el => el.reverse()))
// console.log(weatherMap);

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNumber(1, 10));