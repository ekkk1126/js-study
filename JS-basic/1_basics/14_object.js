// Object 객체 => 
// Object => 정의하고 싶은 것들을 성격이 비슷한 것끼리 묶는 역할


// this 키워드 => 함수가 정의되어 있는 현재 객체 가리킴

let info = {
    year: '2023',
    month: '7월',
    go: function () {
        return `오늘은 ${this.year}년 ${this.month}월 입니다.`;
    }
};

console.log(info);
console.log(info.year);

const key = 'month';
console.log(info[key]);
console.log(info.go());


console.log('---------------')


// 객체를 선언시 변수 선언 방법
const yearKey = 'year';
const yearValue = '2023';

const monthKey = 'month';
const monthValue = '7월';

const info2 = {
    [yearKey]: yearValue,
    [monthKey]: monthValue,
    go: function () {
        return `${this.year}년 입니다!`
    }
};
console.log(info2);
console.log(info2.go());

info2['month'] = '8월';
console.log(info2);

// 없는 키 값과 value 값 입력시 => 추가됨
info2['day'] = '25일';
console.log(info2);

// 속성 삭제
delete info2['day'];
console.log(info2);

/**
 * < 객체의 특징 >
 * 1. const로 선언시 객체 자체 변경 불가능
 * 2. 객체 안의 프로퍼티나 메서드는 변경 가능
 */

const harry = {
    name: '해리포터',
    group: '그리핀도르'
}

console.log(harry);

//harry = {};
// TypeError: Assignment to constant variable.

harry['group'] = '슬리데린';
console.log(harry);


console.log('----모든 키 값 다 가져오기----')
console.log(Object.keys(harry));    // 키값이 Array로 반환
console.log(Object.values(harry));  // Value값을 Array로 반환

const name = '해리포터';
const harry2 = {
    name,       // => === name : name 과 같음 => 키가 string에 해당되는 값이 들어가고 value에는 name에 해당하는 변수값이 들어감
};
console.log(harry2);