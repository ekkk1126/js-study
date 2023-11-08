// 반복문

// for문
// for (기준 변수; 조건; 행동)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 중첩 for문
for (let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j)
    }
}

// * 을 이용해 6x6의 정사각형 출력
let square = '';
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        square += '*';
    }
    square += '\n';
}
console.log(square);


// for ... in
const info = {
    name: '가나다',
    age: 22,
}

for (let key in info) {
    console.log(key)        // key 값 출력
}

console.log('----------------------------')

const numberArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
for (let key in numberArray) {
    //console.log(key)        // 인덱스 값 출력
    console.log(`${key}:${numberArray[key]}`);  // 인덱스 해당하는 값 출력
}


// for ... of
for (let value of numberArray) {
    console.log(value);
}

console.log('----------------------------')


let num = 0;
while (num < 10) {
    num++;
    console.log(num);
}

// do-while 문
let number = 0;
do {
    number++;
} while (number < 10);

console.log(number);

console.log('----------------------------')

// break 문 => 반복문 탈출
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

number = 10;
while (number < 10) {
    if (number === 5) {
        break;
    }

    number++;
    console.log(number);
}


console.log('continue-for')
// continue 문
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log('continue-while')
number = 0;
while (number < 10) {
    number++;

    if (number === 5) {
        continue;
    }
    console.log(number);
}