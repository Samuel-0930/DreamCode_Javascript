// 함수 선언문 function name() { }
// 함수 표현식 const name = function() { }
let add = function (a, b) {
	return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add1 = (a, b) => {
	return a + b;
};

add2 = (a, b) => a + b;

console.log(add1(1, 4));
console.log(add2(1, 4));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expresstoins)
(function run() {
	console.log('👍');
})();
