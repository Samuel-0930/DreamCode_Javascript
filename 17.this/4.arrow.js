// 자바스크립트의 함수는 만능 슈퍼맨!
// 함수처럼 사용, 생성자 함수로 사용 (클래스)
// 하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체) 생성됨
const dog = {
	name: 'Dog',
	play: () => {
		console.log('논다멍');
	},
};
dog.play();
const obj = new dog.play();
console.log(obj);

// ES6
const cat = {
	name: 'cat',
	play() {
		// 객체의 메서드 (오브젝트에 속한 함수)
		console.log('야옹');
	},
};
cat.play();
// const obj1 = new cat.play(); // 생성자 함수로 사용할 수 없음
