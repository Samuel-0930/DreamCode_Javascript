// Object literal { ket: value }
// new Object()
// Object.creat();
// key - 문자, 숫자, 문자열, 심볼
// valye - 원시값, 각체 (함수)
let apple = {
	name: 'apple',
	'hello-bye': '👍', // 특수한 경우가 아니라면 helloBye로 만들자!!
	0: 1,
	['hello-bye1']: '👍',
};

// 속성, 데이터에 접근하기 위해서는
apple.namel; // 마침표 표기법 dot notation
console.log(apple['hello-bye']); // 대괄호 표기법 bracket notation
apple['name'];

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);

// 속성 삭제
delete apple.emoji;
console.log(apple);
