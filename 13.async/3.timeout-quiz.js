// 주어진 second(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
	if (!callback) {
		throw Error('callback 함수를 입력해야함!');
	}
	if (!seconds || seconds < 0) {
		throw Error('second는 0보다 커야 함');
	}
	setTimeout(callback, seconds * 1000);
}

runInDelay(() => {
	console.log('hello my friends');
}, 2);
