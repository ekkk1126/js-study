/** 함수 */

// 함수 선언
function calc(num) {
    console.log((num * 10 / 2 % 3).toString());

}

// 함수 실행
calc(4);


function multiply(x, y = 10) {
    console.log(x * y)
}

multiply(2, 4)
multiply(2)

// 반환 받기
function multiply(x, y) {
    return x * y
}
const result1 = multiply(2, 3);
console.log(result1);

console.log('-------------')

// arrow 함수
const multiply2 = (x, y) => {
    return x * y;
}

console.log(multiply2(2, 5));

const multiply3 = (x, y) => x * y;
console.log(multiply3(3, 4))

const multiply4 = x => x * 2;
console.log(multiply4(4));

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
    return function (y) {
        return function (z) {
            return `x: ${x} y: ${y} z: ${z}`;
        }
    }
}

const multiplyThree = function (x, y, z) {
    console.log(arguments);
    return x * y * z;
}

console.log(multiplyThree(2, 3, 4))

// 무한한 파라미터 받음
const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


(function(x,y){
    console.log(x*y);
})(4,5);


(function (x,y) {
    console.log(x*y)
   }(4,5));


