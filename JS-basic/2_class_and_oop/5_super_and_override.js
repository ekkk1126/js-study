class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요! ${this.name} 입니다.`
    }
}

class FemaleIdol extends Idol {
    part;

    constructor(name, year, part) {
        super(name, year);        // 부모클래스 것을 받아옴; super 키워드 사용
        this.part = part;
    }

    // 함수 안에서는 this 키워드 사용해 변수 불러옴
    // 함수 안 함수를 불러올 경우 super 키워드 사용

    // => 아마도 타입이 다른 것에서는 this 키워드로
    // => 타입이 같을 경우 super 키워드로 ...?

    sayHello() {
        //return `안녕하세요! ${this.name} 입니다. ${this.part}을 맡고있습니다.`
        return `${super.sayHello()} ${this.part}를 맡고 있습니다.`
    }


};


const yujin = new FemaleIdol('안유진', 2003, '보컬');
console.log(yujin);
console.log(yujin.sayHello());

const liz = new Idol('리즈', 2004);
console.log(liz);
console.log(liz.sayHello());
