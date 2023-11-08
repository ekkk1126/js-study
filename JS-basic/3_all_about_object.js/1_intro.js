/**
 * <객체 선언시 사용 방법>
 * 1. object 생성해 객체 생성
 * 2. class를 인스턴화해서 생성
 * 3. function 사용해 객체 생성
 */

const yujin = {
    name: '안유진',
    year: 2003,
};
console.log(yujin);


class Idole {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
};
const yujin2 = new Idole('안유진', 2003);
console.log(yujin2);

// 생성자 함수
function IdoleFunction(name, year) {
    this.name = name;
    this.year = year;
}
const liz = new IdoleFunction('리즈', 2004);
console.log(liz);