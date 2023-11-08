// js 는 lexical scope를 사용하기 떄문에 함수의 상위 스코프가 정의 시점에 평가
// this 키워드는 바인딩 객체가 생성되는 시점에 결정ㅇ

const testFinction = function () {
    return this;
}
console.log(testFinction());
// =>  일반함수를 실행하면 this 키워드가 global object에 매핑됨

console.log(testFinction() === global);

console.log('------------')

const yujin = {
    name: '안유진',
    year: 2003,
    sayHello: function () {
        return `안녕하세요 저는 ${this.name}입니다!`;
    }
}
console.log(yujin.sayHello());


function Person(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `안녕하세요 저는 ${this.name}입니다!!`;
    }
}
const yujin2 = new Person('안유진', 2003);
console.log(yujin2.sayHello());

// 객체의 메서드로 => 가장 상위 레벨에 함수를 선언하면 this 가 자동으로 실행하는 객체로 자동으로 매핑됨
Person.prototype.dance = function () {
    return `${this.name}이 춤을 춘당`;
}
console.log(yujin2.dance());



// 그 외의 위치에 함수 선언시, 함수의 객체는 무조건 global
Person.prototype.dance = function () {
    function dance2() {
        return `${this.name}이 춤을 춘당`;
    }
    return dance2();
}
console.log(yujin2.dance());

console.log('------------------')
/**
 * this. 키워드가 어떤 걸 가르키냐는 세가지만 기억할 것!!
 * 1. 일반 함수가 호출할 땐 this가 최상위 객체 (global 또는 window)를 가리킴
 * 2. 메서드로 호출할 때 호출도니 객체를 가리킴
 * 3. new 키워드를 사용해 객체를 생성했을 때 객체를 가리킴
 * => 2, 3이 아닌 경우 1임
 */

/**
 * 원하는 this 값을 매핑하는 방법
 * 1. apply()
 * 2. call()
 * 3.bind()
 */

function returnName() {
    return this.name;
}
console.log(returnName());

const yujin3 = {
    name: '안유진'
}
console.log(returnName.call(yujin3));
console.log(returnName.apply(yujin3));

/**
 * Call() : 콤마를 기반으로 argument 를 순서대로 넘겨줌
 * apply() : argument 를 리스트로 입력해야함
 * 
 * 공통) 실행하는 순간 바로 계산됨
 */

function multiply(x, y, z) {
    return `${this.name} / 결과값 : ${x * y * z}`;
};
console.log(multiply.call(yujin3, 3, 4, 5));
console.log(multiply.apply(yujin3, [3, 4, 5]))

// bind() : this를 바인딩 한 후, 나중에 실행 가능
const lateFunc = multiply.bind(yujin3, 3, 4, 5);
console.log(lateFunc);
console.log(lateFunc());
