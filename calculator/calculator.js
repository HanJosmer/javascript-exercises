function add (x, y) {
	// return (typeof x === number && typeof y === number) ? x + y : alert("Error: non-numeric input");
	return x + y;
}

function subtract (x, y) {
	// return (typeof x === number && typeof y === number) ? x - y : alert("Error: non-numeric input");
	return x - y;
};

function sum (array) {
	const sum = array.reduce((total, item) => {
		return total + item;
	}, 0);
	return sum;
};

function multiply (array) {
	const product = array.reduce((product, factor) => {
		return product * factor;
	}, 1);
	return product;
};

function power(x, y) {
	let product = 1;
	if (y === 0) {return 1}
	else if (y < 0) {return alert("Negative powers are unsupported at this time")}
	else {
		for (let i = 0; i < y; i++) {
			product *= x;
		};
	};
	return product;
};

function factorial(x) {
	let factorial = 1;
	if (x === 0 || x === 1) {
		return 1;
	} else {
		for (let i = x; i > 1; i--) {
			factorial *= i;
		};
	};
	return factorial;
};

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}