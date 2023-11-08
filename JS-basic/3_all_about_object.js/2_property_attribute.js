/**
 * Property Attribute
 * 
 * 1. 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2. 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 떄 호출되는 함수로 구성된 프로퍼티 (ex. getter/setter)
 */

const yujin = {
    name: '안유진',
    year: 2003,
};

// 생성자 함수 혹은 클래스에 바로 .이 붙으면 static
console.log(Object.getOwnPropertyDescriptor(yujin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yujin, 'year'));

// 모든 프로퍼티의 값 보여줌
console.log(Object.getOwnPropertyDescriptors(yujin));

/**
 * 1. value - 실제 프로퍼티의 값
 * 2. writeable - 값 수정 여부. false이면 프로퍼티 값 수정 불가
 * 3. enmerable - 열거 가능 여부. for ... in 등 사용가능시 true
 * 4. configurable - 프로퍼티 어트리뷰트 재정의 가능 여부 판단
 *                   false 일 경우 프로퍼티 삭제 혹은 어트리뷰트 변경 금지
 *                   writeable 이 true 인 경우 값 변경 및 writzble 변경 가능
 */
console.log('------------1')
const yujin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};
console.log(yujin2);
console.log(yujin2.age);

yujin2.age = 32;
console.log(yujin2.age);
console.log(yujin2.year);

console.log(Object.getOwnPropertyDescriptor(yujin2, 'age'));

console.log('-----writable---')
// writable 적용
Object.defineProperty(yujin2, 'height', {
    value: 172,
    // 아래 모두 설정 하지 않으면, 기본값은 false
    writable: true,
    enumerable: true,
    configurable: true,
});
console.log(yujin2);
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

yujin2.height = 168;
console.log(yujin2);

Object.defineProperty(yujin2, 'height', {
    value: 172,
    // 아래 모두 설정 하지 않으면, 기본값은 false
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

yujin2.height = 180;
console.log(yujin2);        // 오류는 나지 않지만 값 변경X

console.log('-----enumerable---')
// enumerable : 열거여부
console.log(Object.keys(yujin2));
for (let key in yujin2) {
    console.log(key);
}

// name 프로퍼티 enumerable : false => 해당 프로퍼티 열겨 되지 않음
Object.defineProperty(yujin2, 'name', {
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yujin2, 'name'));
console.log(Object.keys(yujin2));
for (let key in yujin2) {
    console.log(key);
};
console.log(yujin2);

// BUT 해당 프로퍼티가 사라진 것은 아님 => 열거하지 못할 뿐
console.log(yujin2.name);


console.log('-----configurable ---')
console.log(yujin2.height)
//configurable 
Object.defineProperty(yujin2, 'height', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

// Object.defineProperty(yujin2, 'height', {
//     enumerable: false,
// });

// writable 이 true 면, configurable이 false여도 값 변경 가능
Object.defineProperty(yujin2, 'height', {
    value: 168,
})
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

// writable false 변경후, 다시 true로 변경시 에러 발생
Object.defineProperty(yujin2, 'height', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

Object.defineProperty(yujin2, 'height', {
    writable: true,
})
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));
