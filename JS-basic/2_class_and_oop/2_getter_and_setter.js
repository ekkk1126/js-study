class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // getter 
    // 값을 가져올 때 사용
    // 함수처럼 정의하지만 변수처럼 사용
    // 1. 데이터를 가공해서 새로운 데이터를 반환할 떄
    // 2. private 한 값을 반환할 때
    get nameAndYear() {
        return `${this.name} - ${this.year}`;
    }

    // setter
    // 값을 새로 저장할 때 사용
    // 무조건 파라미터를 받아야함
    set name(name) {
        this.name = name;
    }
}

const yujin = new Idol('안유진', 2003);
console.log(yujin);
console.log(yujin.nameAndYear);


yujin.name = '가나다';
console.log(yujin);

class Idol2 {
    // private 값 : 실제로 값은 갖고 있으나, 외부에서 엑세스하지 못하는 값
    // => getter 를 이용해 가져옴
    #name;
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const liz = new Idol2('리즈', 2004);
console.log(liz);
console.log(liz.name);

liz.name = '가나다';
console.log(liz.name)
