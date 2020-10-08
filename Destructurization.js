/* ------------------- */
function connect({
	host = 'lockalhost',
	port = 3000,
	user = 'default'} = {}) {
		console.log(`host: ${host}, port: ${port}, user: ${user}`);//host: lockalhost, port: 3000, user: default
	}

	connect();


/* Деструктуризация объекта */

const user = {
	name: {
	  first: 'Sam',
	  second: 'Smith'
	},
	pass: 'qwerty',
	rights: 'user'
};

const {name: {first, second}, pass, rights} = user;

console.log(first, second, rights); //Sam Smith user

/* Переименование переменных */

let person = {
	name: 'Jack',
	age: 20
};

let {name: personeName, age: personAge} = person;

console.log(personeName, personAge); //Jack 20


/* Деструктуризация массива */

const numbersSec = [5, 14, 1, 8];

const [, , n] = numbersSec;

console.log(n); //1


const numbers = [[3, 6], [9, 12]];

const [[a, b], [c, d]] = numbers;

console.log(a, b, c, d); //3 6 9 12


/* ------------------- */
const country = {
	name: 'England',
	population: 2000000,
	gender: {
		male: ['15%', "40%"],
		female: ['16%', '29%']
	}
};

//country.gender.male[0]
const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;

console.log(maleUnder18, femaleAdult); //15% 29%


