// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎 출력하도록

//#if
if (num % 2 === 0) {
	console.log('👍');
} else {
	console.log('👎');
}

//#ternary
console.log(num % 2 === 0 ? '👍' : '👎');
