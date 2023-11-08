// 상속 ingheritance
// : 객체들 간의 관계를 구축하는 방법
// 수퍼클래스, 또는 부모 클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있음


// 자식 클래스는 부모 클래스를 물려받아 부모 클래스의 속성, 함수들을 사용가능하나,
// 부모 클래스는 자식 클래스의 속성, 함수 등 사용 불가

class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
};

class FemaleIdol extends Idol {
    dance() {
        return `${this.name}이 춤을 춥니다.`
    }
};


class MaleIdol extends Idol {
    sing() {
        return `${this.name}이 노래를 부릅니다.`
    }
};

const yujin = new FemaleIdol('안유진', 2003);
console.log(yujin);
console.log(yujin.name);
console.log(yujin.dance());

const jimin = new MaleIdol('지민', 1995);
console.log(jimin);
console.log(jimin.name);
console.log(jimin.sing());


// instance of
console.log(yujin instanceof Idol);
console.log(yujin instanceof FemaleIdol);
console.log(yujin instanceof MaleIdol);