console.log('start!!!')

// 산술연산자 +-*/%
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 13);

console.log('--------------------')

// 지수 연산자
console.log(2**3);


console.log('--------------------')

// 증가와 감소 
let number = 1;

number++;
console.log(number);

number--;
console.log(number);

/* result에 값 할당 후 증감 */
let result = 1;
console.log(result);
result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

/* 선증감후 result에 값 할당 */
result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);


console.log('--------------------')

// 숫자 타입 아닌 타입에 + -
let tmp = '99';
console.log(+tmp)
console.log(typeof +tmp)     //number로 변경 but, 기존 타입이 변경되는 건 아님

tmp = true;
console.log(+tmp);
console.log(typeof +tmp);

tmp = false;
console.log(+tmp);
console.log(typeof +tmp);

tmp = '가나다';
console.log(+tmp);

tmp = '99'
console.log(-tmp)


console.log('--------------------')


// 할당연산자
num = 100;
console.log(num);

// 계산후 다시 변수에 저장
num += 10;
console.log(num);

num -= 10;
console.log(num);

num *= 10;
console.log(num);

num /= 10;
console.log(num);

num %= 10
console.log(num);


console.log('--------------------')


// 비교연산자
// 값의 비교
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(1 == true);

console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(1 != true);

console.log('--------------------')

// 값과 타입 비교 ( === )
console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(1 === true);

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(1 !== true);


console.log('--------------------')

// 대소관계 비교 연산자
console.log(100 > 1);
console.log(100 <= 1);

console.log('--------------------')

// 삼항 조건 연산자
// 조건 ? 참일경우 : 거짓일경우 
console.log(10 > 0 ? '10이 0보다 큼' : '10이 0보다 작음')

// 논리 연산자
// && (and) : 모두 true => true
console.log(true && true);
console.log(true && false);

// || (or) : 한쪽만 true => true
console.log(true || true);
console.log(true || false);


console.log('--------------------')

/**
 * 단축평가
 * 장점 : 계속 연결할 수 있음
 * && 사용할 때 좌측이 true => 우측값 반환
 * && 사용할 때 좌측이 false => 좌측값 반환
 * || 사용할 때 좌측이 true => 좌측값 반환
 * || 사용할 때 좌측이 false => 우측값 반환
 */
console.log(true || '가나다');
console.log(false || '가나다');
console.log(true && '가나다');
console.log(false && '가나다');

console.log(true && true && '가나다');
console.log(true && false && '가나다');


console.log('--------------------')

// null 연산자
let name;
console.log(name);

// if name 변수가 undefined or null => 좌측값 반환
name = name ?? '가나다';
console.log(name);

name = name ?? '다나가';
console.log(name);

let name2;
name2 ??= '가나다';
console.log(name);