// 1

let age = +prompt('how old are you');
let monthOrYear = prompt('month or year?');

if (monthOrYear === 'month') {
	if (age >= 1 && age <= 12) {
		console.log('baby');
	} else {
		console.log('not baby');
	}
} else if (monthOrYear === 'year') {
	if (age >= 1 && age <= 2) {
		console.log('toddler');
	} else if (age >= 3 && age <= 12) {
		console.log('child');
	} else if (age >= 13 && age <= 17) {
		console.log('teenager');
	} else if (age >= 13 && age <= 17) {
		console.log('teenager');
	} else if (age >= 18) {
		console.log('adult');
	} else 'wrong';
} else {
	console.log('wrong');
}

// 2

// 3

let a = +prompt();
b = +prompt();
c = +prompt();
let numberOfNegatives = 0;
if (a < 0) {
	numberOfNegatives++;
}
if (b < 0) {
	numberOfNegatives++;
}
if (c < 0) {
	numberOfNegatives++;
}

if (a === 0 || b === 0 || c === 0) {
	console.log('unsigned');
} else if (numberOfNegatives % 2 === 0) {
	console.log('+');
} else {
	console.log('-');
}

// 4

let n = +prompt();

let i = 0;
let j = 0;

debugger;
if (n % 2 === 0 && !Math.floor(n / 10)) {
	i += 1;
}
if (n % 3 === 0 && n % 10 === 1) {
	j += 1;
}
console.log(i);
console.log(j);

// 5
