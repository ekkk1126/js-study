var num1 = 20;
function levelOne() {
    console.log(num1);
}
// levelOne();

function levelOne() {
    var num1 = 40;

    console.log(num1);
}
// levelOne();

// 가장 가까운 scope 에 있는 변수를 가져오기 때문에 40
// 함수 scope 안에서 num을 선언해도 상위 함수의 변수 num 을 덮진 않음

console.log(num1);

console.log('---------------')


function levelOne() {
    var num1 = 40;

    function levelTwo() {
        var num2 = 99;

        console.log(`levelTwo num2 : ${num2}`);
        console.log(`levelTwo num1 " ${num1}`);     // 바로 상위 scope 에있는 num1 출력 (20이 아닌 40 출력)
    }

    levelTwo();
    console.log(`levelOne num1 : ${num1}`);
    // 현재 함수 scope 에있는 num1 출력 (20이 아닌 40 출력)
    // => 모든 선언은 가장 가까운 scope 에 있는 선언부터 활용
}
levelOne();
console.log(num1);
// console.log(num2); 


console.log('--------lexical scope')
// JS -> lexical scope
// : 선언된 위치가 상위 스코프를 정함

// <-> Dynamic scope : 실행한 위치가 상위 스코프를 정함

var num3 = 3;

function functionOne() {
    var num3 = 100;

    funtionTwo();
}

function funtionTwo() {
    console.log(num3);
    // functionOne 에서 실행했으니까 100을 가져올 것인가?
    // global scope에 있는 3을 가져올 것인가?
}
functionOne();  // global scope 에서 값 가져옴

console.log('---------')

// for 문, if 문 등 새로운 scope 안 만듦 => 기존의 i가 global scope로 변경됨
// var 키워드로 선언시 scope 가 생기는 것은 함수일때만
var i = 999;
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`);


// let 키워드 사용
// let, const 키워드 사용시 => 함수뿐만 아니라 조건/순환문에서 block level scope 를 만들
i = 999;
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`);

/**
 * var 키워드는 함수 레벨 스코프만 만듦
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어냄
 */