// 단항연산자 Unary operators
// +
// -
// !
let a = 5;
a = -a; // -1 * 5
console.log(a);
console.log(-a);

a = +a;
console.log(a);

a = -a;
a = +a;
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

console.clear();

console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+'text');
console.log(+undefined);

console.log(!!1); // ! 부정연산자
// !! 값을 boolean 타입으로 변환함
