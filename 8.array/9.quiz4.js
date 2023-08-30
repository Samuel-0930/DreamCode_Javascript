// 퀴즈4: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']

function replace(array, from, to) {
	return array.map((item) => (item === from ? to : item)); // map 배열의 아이템들을 각각 조건에 맞는 것으로 바꾸어 새로운 배열을 return
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);
