// 클래스를 베이스로한 객체지향 프로그래밍
class Animal {
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}

	printName() {
		console.log(`${this.name} ${this.emoji}`);
	}
}

class Dog extends Animal {
	constructor(name, emoji, owner) {
		super(name, emoji);
		this.owner = owner;
	}

	play() {
		console.log('같이놀자!');
	}
}

class Tiger extends Animal {
	constructor(name, emoji, owner) {
		super(name, emoji);
		this.owner = owner;
	}

	hunt() {
		console.log('사냥하자!');
	}
}

const dog = new Dog('강쥐', '강아지', '삼열');
const tiger = new Tiger('호식이', '호랑이');

dog.play();
dog.printName();
tiger.hunt();
tiger.printName();
