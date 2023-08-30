function replace(array, from, to) {
	const replaced = Array.from(array);
	for (let i = 0; i < replaced.length; i++) {
		if (replaced[i] === from) {
			replaced[i] = to;
		}
	}
	return replaced;
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍇', '🥝');
console.log(result);
