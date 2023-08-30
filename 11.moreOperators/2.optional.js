// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined인 경우를 확인할 때
let obj = { name: '🐶', owner: { name: '엘리' } };
const ownerName = obj?.owner?.name;
console.log(ownerName);
