const testObj = {};

console.log('----------1')
/**
 * __proto__ 모든 객체에 존재하는 프로퍼티
 * 상속에서 부모 클래스에 해당되는 값
 */
console.log(testObj.__proto__);

console.log('----------1')

function Idol(name, year) {
    this.name = name;
    this.year = year;
}

console.log('----------1')

console.log(Idol.prototype);
console.dir(Idol.prototype, {
    showHidden: true,
});


console.log('--------- circular')
// circular reference (서로 참조)
console.log(Idol.prototype.constructor === Idol);
console.log(Idol.prototype.constructor.prototype === Idol.prototype);

const yujin = new Idol('안유진', 2003);
console.log(yujin.__proto__);
console.log(yujin.__proto__ === Idol.prototype);

console.log(testObj.__proto__ === Object.prototype);
console.log(Idol.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Idol.prototype.__proto__ === Object.prototype);


console.log(yujin.toString());
console.log(Object.prototype.toString());

console.log('----------useful')
// 어떤 부분이 유용?
function Idol2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHi = function () {
        return `${this.name}가 인사를 합니다.`
    }
}

const liz = new Idol2('리즈', 2004);
const ray = new Idol2('레이', 2004);

console.log(liz.sayHi());
console.log(ray.sayHi());

console.log('------------000')
// false ? => 같은 골격의 sayHi 함수이지만, 각 사람마다 고유의 함수라고 생각해
console.log(liz.sayHi === ray.sayHi);

// 고유 프로퍼티인지 여부 확인
console.log(liz.hasOwnProperty('sayHi'));

function Idol3(name, year) {
    this.name = name;
    this.year = year;
};

Idol3.prototype.sayHello = function () {
    return `${this.name} 이(가) 인사를 합니다.`
}
const liz2 = new Idol3('리즈', 2004);
const ray2 = new Idol3('레이', 2004);

console.log(liz2.sayHello());
console.log(ray2.sayHello());

// true ? => 한 공간에만 해당 함수 저장 => 효율적
console.log(liz2.sayHello === ray2.sayHello);

// false => 상속받은 프로퍼티
console.log(liz2.hasOwnProperty('sayHello'));


console.log('--------static-')
// static 키워드로 생성된
Idol3.sayStaticHello = function () {
    return 'Hi! I am static method'
};
console.log(Idol3.sayStaticHello());


console.log('-------override')
// Overriding
function Idol4(name, year) {
    this.name = name;
    this.year = year;

    // 오버라이딩
    this.sayHello = function () {
        return 'Hi! instnace method'
    }
};

Idol4.prototype.sayHello = function () {
    return `Hi! prototype method!`
}

const liz3 = new Idol4('리즈', 2004);
console.log(liz3.sayHello());


console.log('-------getprototypeof')
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function () {
    return `${this.name} Hello!`
}

function FemaleIdol(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name} is dancing!`
    }
}

const gaEil = new IdolModel('가을', 2002);
const WY = new FemaleIdol('장원영', 2004);

console.log(gaEil.__proto__);
console.log(gaEil.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEil) === IdolModel.prototype);

console.log(gaEil.sayHello());
console.log(WY.dance());

console.log('----------00001')

// 불가
// console.log(WY.sayHello());
// 프로토 변경 => 기존 프로토 연결 끊김 (기존 프로토가 변경할 프로토와 연결되는 것은 아님)
Object.setPrototypeOf(WY, IdolModel.prototype);
console.log(WY.sayHello());
console.log(WY.constructor);

console.log(WY.constructor === FemaleIdol);
console.log(WY.constructor === IdolModel);


console.log('-------함수 prototype 직접 변경');
// 함수 prototype 직접 변경
FemaleIdol.prototype = IdolModel.prototype;

const ive = new FemaleIdol('아이브', 2022);
console.log(Object.getPrototypeOf(ive) === FemaleIdol.prototype);
console.log(FemaleIdol.prototype === IdolModel.prototype);
