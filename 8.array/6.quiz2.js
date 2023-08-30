// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function countFruits(fruits, item) {
	let count = 0;
	for (i = 0; i < fruits.length; i++) {
		if (fruits[i] === item) {
			count++;
		}
	}

	return count;
}
fruits = ['🍌', '🥝', '🍇', '🥝'];
count = countFruits(fruits, '🥝');
console.log(count);
