// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
setInterval(() => {
	const now = new Date();
	console.log(now.toLocaleTimeString('ko-Kr'));
}, 1000);
