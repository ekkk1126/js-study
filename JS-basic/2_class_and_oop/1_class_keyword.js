// 클래스
// : 객체지향 프로그래밍에서 특정 객체(인스턴스) 생성하기 위한
// 변수와 메소드를 정의하는 일종의 틀
// : 정보를 일반화해서 정리하는 방법

class Idol {
    name;
    year;

    // 생성자 => 위에서 name, year 를 따로 정의하지 않아도 괜찮음 (속성 정의는 optional)
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // 메소드 정의
    sayName(){
        return `안녕하세요. 저는 ${this.name} 입니다.`;
    }
}

const yujin = new Idol('안유진',2003); 
console.log(yujin);
console.log(yujin.sayName());

const liz = new Idol('리즈',2004);
console.log(liz);
console.log(liz.name);
console.log(liz.year);
console.log(liz.sayName());

// 클래스는 함수로 인식됨. 클래스로 생성한 객체는 object 임.
console.log(typeof Idol);
console.log(typeof liz);

