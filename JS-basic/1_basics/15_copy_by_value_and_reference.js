/**
 * Copy by value : 값에 의한 전달
 * Copy by reference 참조에 의한 전달
 * 
 * 1. 기본적으로 모든 primitive 값은 copy by value
 * primitivw? -> object를 제외하고 생성된 모든 다른 데이터 타입
 * 
 * 2. 객체는 copy by reference
 */


// 1. Copy by Value
let original = '안녕하세용';
let clone = original;

console.log(original);
console.log(clone);

console.log('-----------------------------')

clone += ' 좋은 아침입니다.'
console.log(original);
console.log(clone);


console.log('------------reference----------')
// 2. Copy by reference
let originalObj = {
    name: '해리포터',
    group: '그리핀도르',
};

let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);

console.log('-----------------------------')

originalObj['name'] = '헤르미온느';
console.log(originalObj);
console.log(cloneObj);

console.log(original === clone);
console.log(originalObj === cloneObj);


console.log('------------Quiz---------')

const yuJin1 = {
    name: '안유진',
    group: '아이브',
};

const yuJin2 = yuJin1;

const yuJin3 = {
    name: '안유진',
    group: '아이브',
};

console.log(yuJin1 === yuJin2);     // True => 같은 메모리 공간을 참조했기 때문
console.log(yuJin1 === yuJin3);     // False => 값은 같지만 실제로는 다른 메모리 공간을 참조하기 때문에 다름
console.log(yuJin2 === yuJin3);     // False => 값은 같지만 실제로는 다른 메모리 공간을 참조하기 때문에 다름

console.log('-------spread op----------------')
// => Object를 새로 선언했기 떄문에 copy by value
const yuJin4 = {
    ...yuJin3
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3);

const yuJin5 = {
    year: '2003',
    ...yuJin3
};
console.log(yuJin5);

// spread op는 순서 중요
const yuJin6 = {
    name: '가나다',
    ...yuJin3
};
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: '가나다',
};
console.log(yuJin7);