// 타입 변환
// 1. 명시적 (강제적)
// 2. 암묵적



// 명시적
let age = 32;
let strAge = age.toString();
console.log(typeof strAge, strAge);


console.log('----------------------------')

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

console.log('----------------------------')

// 명시적 변환 +
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

// boolean 타입으로 변환
// string 안에 값이 있으면 => boolean 기준으로 true
// 즉, 안에 값이 있으면 true, 없으면 false라고 판단해도 괜찮
// 숫자 0 일경우 false

console.log(!'x');
console.log(!!'x');

console.log(!!0);
console.log(!!'0');

console.log(!!false);
console.log(!!undefined);
console.log(!!null)

console.log(!!{})   // object는 무조건 true
console.log(!![])   // 배열은 무조건 true