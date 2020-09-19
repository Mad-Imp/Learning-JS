'use strict'

//Методы перебора массива

//forEach

const someArr = [2, 3, 6, 8, 10];

someArr.forEach((item, i, arr) => {
	console.log(`${i}: ${item} внутри массива ${arr}`);
}); 

//0: 2 внутри массива 2,3,6,8,10
//1: 3 внутри массива 2,3,6,8,10
//2: 6 внутри массива 2,3,6,8,10
//3: 8 внутри массива 2,3,6,8,10
//4: 10 внутри массива 2,3,6,8,10

//filter

const names = ['Ivan', 'Ann', 'Konstantin', 'Ksenia'];

const shortNames = names.filter(name => name.length < 5);

console.log(shortNames); //[ 'Ivan', 'Ann' ]

//map

const answers = ['IvAn', 'AnnA', 'HELLO', 'Twenty'];

const result = answers.map(item => item.toLowerCase());

console.log(result); //[ 'ivan', 'anna', 'hello', 'twenty' ]

//every/some

const some = [4, 'dfd', 'kk'];

console.log(some.some(item => typeof(item) === 'number')); //true

console.log(some.every(item => typeof(item) === 'number')); //false

//reduce

const arr = [4, 5, 1, 3, 2, 6];

const res = arr. reduce((sum, current) => sum + current);

console.log(res); //21


//Применение

const obj = {
	ivan: 'persone',
	ann: 'persone',
	dog: 'animal',
	cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr); //[ 'ivan', 'ann' ]
