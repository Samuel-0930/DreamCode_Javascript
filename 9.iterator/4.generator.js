function* multipleGenerator() {
	for (let i = 0; i < 10; i++) {
		console.log(i);
		yield i ** 2;
	}
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
multiple.return();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
