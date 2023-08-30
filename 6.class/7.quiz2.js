// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10,000원
// 파트타임 직원은 시간당 8,000원

/**class Employee {
	name;
	workSpace;
	workTime;
	constructor(name, workSpace, workTime) {
		this.name = name;
		this.workSpace = workSpace;
		this.workTime = workTime;
	}
}

class FullTime extends Employee {
	#hourly = 10000;

	calculateFee() {
		const fee = this.workTime * this.#hourly;
		console.log(`${this.name}의 급여는 ${fee}원 입니다!`);
	}
}

class HalfTime extends Employee {
	#hourly = 8000;

	calculateFee() {
		const fee = this.workTime * this.#hourly;
		console.log(`${this.name}의 급여는 ${fee}원 입니다!`);
	}
}

const halfTime = new HalfTime('손삼열', '사무국', 50);
const fullTime = new FullTime('한현주', '연구국', 100);

halfTime.calculateFee();
fullTime.calculateFee();**/

class Employee {
	constructor(name, department, hoursPerMonth, payRate) {
		this.name = name;
		this.department = department;
		this.hoursPerMonth = hoursPerMonth;
		this.payRate = payRate;
	}

	calculatePay() {
		return this.hoursPerMonth * this.payRate;
	}
}

class FullTimeEmplyee extends Employee {
	static #PAY_RATE = 10000; // PAY_RATE는 class 안에서만 사용하기 때문에 외부에서 보지도, 수정하지도 못하게 캡슐화 하는 것이 좋다
	constructor(name, department, hoursPerMonth) {
		super(name, department, hoursPerMonth, FullTimeEmplyee.#PAY_RATE);
	}
}

class PartTimeEmplyee extends Employee {
	static #PAY_RATE = 8000;
	constructor(name, department, hoursPerMonth) {
		super(name, department, hoursPerMonth, PartTimeEmplyee.#PAY_RATE); //
	}
}

const samuel = new FullTimeEmplyee('삼열', 's/w', 30);
const bob = new PartTimeEmplyee('밥', 's/w', 20);
console.log(samuel.calculatePay());
console.log(bob.calculatePay());
