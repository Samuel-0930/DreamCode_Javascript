// 동결! Object.freeze 추가 X, 삭제 X, 쓰기 X, 속성 재정의 X
// (단, 얕은 꽁꽁 얼림!) -> 참조하는 객체까지는 얼리지 않음
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '강아지', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
ellie.name = '엘리얌';
console.log(dog);

// 밀봉! Object.seal 값의 수정 O, 추가 X, 삭제 X, 속성 재정의 X
const cat = { ...dog };
// Object.assign(cat, dog);
console.log(cat);
Object.seal(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);
console.log(Object.isFrozen(dog));
console.log(Object.isSealed(dog));

// 확장 금지 preventExtensions
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
