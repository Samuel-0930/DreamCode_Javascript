// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
	this.name = name;
	this.emoji = emoji;
}

Animal.prototype.printName = function () {
	console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
	// super(name, emoji)
	Animal.call(this, name, emoji);
	this.owner = owner;
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
	console.log('같이 놀자옹!');
};

function Tiger(name, emoji) {
	Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
	console.log('사냥 ㄱㄱ');
};

const dog1 = new Dog('멍멍', '강아지', '엘리');
const tiger = new Tiger('호랭이', '호랑이');

dog1.play();
dog1.printName();
tiger.hunt();
tiger.printName();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger instanceof Dog);
console.log(tiger instanceof Animal);
console.log(tiger instanceof Tiger);
