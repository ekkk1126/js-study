// Array Functions

let number = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
]

console.log(number);
console.log('-------시작--------');

//push => 배열의 마지막에 값 추가 (배열 직접적 변경)
//      => 배열에 새로운 값 추가 후 반환값을 추가하여 길이 반환
console.log(number.push('가나다'));
console.log(number);

console.log('----------------------------');

//pop => 해당 배열의 마지막 인덱스에 해당하는 값을 삭제 후, 해당 값 반환
console.log(number.pop());
console.log(number);

console.log('-------------shift----------');

//shift => 배열의 첫번째 값 반환후, 해당 값 삭제
console.log(number.shift());
console.log(number);

//unshift => 배열의 첫번째에 값 추가, 배열의 길이 반환
console.log(number.unshift('one'));
console.log(number);


console.log('--------splice--------------');

//splice => 배열의 일정부분 삭제 (삭제 시작부분, 삭제개수), 삭제 부분 배열로 반환
console.log(number.splice(0, 3));
console.log(number);

console.log('----------------------------');


number = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
]

console.log('-----------concat---------');
// concat() => 배열 마지막 인덱스에 값 추가, 원래 배열 변경 X
console.log(number.concat('가나다'));
console.log(number);

console.log('---------slice-------------');
//slice() => 배열 삭제 부분 삭제, (시작부분, 마지막부분+1) 
console.log(number.slice(0, 3));
console.log(number);


console.log('---------spread op-----------');
//spread operator => number 배열안에 있는 값들이 펼쳐져 number2 배열에 저장됨
// ... 이 없고 배열만 넣으면 그 배열을 넣는 것

let number2 = [
    ...number
];
console.log(number2);
console.log([
    ...number,
] === number)


console.log('-------join------------');

//join()
console.log(number.join());
console.log(number.join('! '));

console.log('-------sort-------------');
// sort() => 오름차순 정렬, 원래 배열 변경됨
number.sort();
console.log(number);

let num = [
    1,
    9,
    3,
    7,
    5,
];
console.log(num);

// a,b 비교했을때
// 1. a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자 반환
// 2. a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자 반환
// 3. 원래 순서를 그대로 두려면 0을 반환
num.sort((a, b) => {
    return a > b ? 1 : -1;
});

console.log(num);


// 반대로 정렬 (내림차순 정렬)
num.sort((a, b) => a > b ? -1 : +1);
console.log(num);


console.log('-----------map-----------');


//map() => 기존 배열 변경X
console.log(number.map((x) => `num : ${x}`));


console.log('----------filter-----------');
// filter() => 조건을 만족하는 값 찾음
numbers = [1, 2, 5, 7, 2, 8, 11];
console.log(numbers.filter((x) => x % 2 === 0))

//find() => 조건의 만족하는 값 찾으면 반환 후, 그 뒤는 보지 않음
console.log('----------find-----------');
console.log(numbers.find((x) => x % 2 === 0));


//findIndex() => 해당 조건 만족하는 값의 인덱스 번호 반환, 그 뒤는 안봄
console.log('----------find인덱스-----------');
console.log(numbers.findIndex((x) => x % 2 === 0));


console.log('----------reduce-----------');
//reduce() 
// 기존의 값이 p, 이전의 값이 n에 들어감
// 처음 함수를 넣을 경우 두 번째 파라미터를 이용함
console.log(numbers.reduce((p, n) => p = n, 0))