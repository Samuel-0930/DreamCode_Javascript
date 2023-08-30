// 퀴즈5:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function countFruits(fruits, item) {
	return fruits.filter((value) => value === item).length;
	/** 
	return fruits.reduce((count, value) => {
		if (value === item) {
			count++;
		}
		return count;
	}, 0);*/
}

const fruits = ['🍌', '🥝', '🍇', '🥝'];
const result = countFruits(fruits, '🥝');
console.log(result);
