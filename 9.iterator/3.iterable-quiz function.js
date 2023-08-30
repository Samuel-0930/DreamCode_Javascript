// [Sybbol.iterator](): Iterator{ next(): {value, done}};
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0, 1, 2, 3, ...,9, 10
//0, 2, 4, 6, ..., 18, 20

function cal(init, max, callback) {
	return {
		[Symbol.iterator]() {
			const MAX_VALUE = max;
			let num = init;
			return {
				next() {
					return {
						value: callback(num++),
						done: num > MAX_VALUE,
					};
				},
			};
		},
	};
}
const obj = cal(10, 30, (n) => n * 2);
for (const val of obj) {
	console.log(val);
}
