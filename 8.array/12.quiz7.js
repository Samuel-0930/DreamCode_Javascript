// 퀴즈 12
// 5이상의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const filted = nums.filter((item) => item >= 5);

const aver =
	filted.reduce((sum, value) => {
		sum += value;
		return sum;
	}, 0) / filted.length;

console.log(aver);
