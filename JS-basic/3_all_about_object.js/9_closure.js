/**
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합
 * 
 *=> 상위 함수보다 하위함수가 더 오래 살아있는 경우를 closure 라고 함
 */

//  function getNumber(){
//     var number = 5;

//     function innerGetNumber(){
//         return number;
//     }

//     return innerGetNumber();
//  }
//  console.log(getNumber());


function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber;
}
const runner = getNumber();
console.log(runner);
console.log(runner());

console.log('---------')
// 1. 데이터 캐싱
function cacheFuntion(numNumb) {
    // 아래 계산은 매우 오래걸린다는 가정을 했을 때
    // 반복적으로 계속 작업해야함 => 비표율적
    var number = 10 * 10

    function innercarhceFunction(newNumb) {
        return number * number;
    }

    return innercarhceFunction;
}

const runner2 = cacheFuntion();
console.log(runner2(10));


// 반복적으로 특정값을 변환해야할 때
function cacheFuntion2() {
    var number = 99;

    function increment() {
        number++;
        return number;
    }
    return increment;
}

const runner3 = cacheFuntion2();
console.log(runner3());
console.log(runner3());

//2. 정보 은닉
function Idol(name, year) {
    this.name = name;

    var _year = year;
    this.sayNameAndYear = function () {
        return `안녕하세요. 저는 ${this.name} 입니다. ${_year} 년에 태어났습니다.`
    }
}

const yujin = new Idol('안유진', 2003);
console.log(yujin.sayNameAndYear());

console.log(yujin.name);
console.log(yujin._year);