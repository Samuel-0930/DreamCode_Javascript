// [Sybbol.iterator](): Iterator{ next(): {value, done}};
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0, 1, 2, 3, ...,9, 10
//0, 2, 4, 6, ..., 18, 20

const multiple = {
	[Symbol.iterator]() {
		const MAX_VALUE = 10;
		let num = 0;
		return {
			next() {
				return {
					value: num++ * 2,
					done: num > MAX_VALUE,
				};
			},
		};
	},
};

for (const val of multiple) {
	console.log(val);
}
