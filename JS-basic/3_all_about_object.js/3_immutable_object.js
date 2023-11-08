const yujin = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear - this.year;
    },

    set age(age) {
        this.age = new Date().getFullYear - age;
    }
};
console.log(yujin);

/**
 * 1. Extensible : 확장 가능 여부 설정
 */
console.log(Object.isExtensible(yujin));
yujin['position'] = 'vocal';
console.log(yujin);

// extensible => false 로 변경
Object.preventExtensions(yujin);
console.log(Object.isExtensible(yujin));

// extensible : false 이면, 에러창은 안 나오지만, 값 추가X
yujin['group'] = '아이브';
console.log(yujin);

// 삭제는 가능
delete yujin['position'];
console.log(yujin);


console.log('-----Seal---')
// Seal
const yujin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear - this.year;
    },

    set age(age) {
        this.age = new Date().getFullYear - age;
    }
};
console.log(yujin2);

console.log(Object.isSealed(yujin2));

// Seal : true 변경
Object.seal(yujin2);
console.log(Object.isSealed(yujin2));

// Seal : true => 값 추가X
yujin2['group'] = '아이브';
console.log(yujin2);

// Seal : true => 값 삭제 가능 O
delete yujin2['name'];
console.log(yujin2)

// seal 을 하는 작업 = configurable : false 작업
Object.defineProperty(yujin2, 'name', {
    value: '가나다',
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(yujin2, 'name'));


console.log('-----Freezed---')
// Freezed : 동결 => 읽기 외에 모든 기능 불가능 하게 만듦
const yujin3 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear - this.year;
    },

    set age(age) {
        this.age = new Date().getFullYear - age;
    }
};
console.log(yujin3);

// Freezed 확인
console.log(Object.isFrozen(yujin3));

// Freezed 기능 수행
Object.freeze(yujin3);
console.log(Object.isFrozen(yujin3));

// 값 추가 및 삭제 불가
yujin3['group'] = '아이브';
console.log(yujin3);

delete yujin3['name'];
console.log(yujin3);

// //값 변경 불가
// Object.defineProperties(yujin3, 'name', {
//     CSSMathValue : '가나다'
// })

console.log('------------WLdrmd')
const yujin4 = {
    name: '안유진',
    year: 2003,
    liz: {
        name: '리즈',
        year: 2004
    }
};
Object.freeze(yujin4);
console.log(Object.isFrozen(yujin4));

// 상위 오브젝트를 freeze를 해도 하위 오브젝트까지 freeze 되는 건 아님 (Seal, Freezed, Extensible 모두)
// 하위 오브젝트까지 바꾸기 위해서는 재귀함수 등의 방법을 이용해 변경
console.log(Object.isFrozen(yujin4['liz']));