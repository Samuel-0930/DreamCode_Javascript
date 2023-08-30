const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y };
console.log(coordinate);

function makeObj(name, age) {
	return {
		name,
		age,
	};
}

makeObj('Samuel', 23);

let object = makeObj('Samuel', 23);
console.log(object);
