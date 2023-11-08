// static
// 객체가 아닌 클래스에 귀속됨

class Idol {
    name;
    year;
    static groupName;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName() {
        return '아이브';
    }
}

const yujin = new Idol('안유진', 2003);
console.log(yujin);

console.log(Idol.groupName);
console.log(Idol.returnGroupName());


// factorial constructor
class Idol2 {
    name;
    year;
    static groupName;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) {
        return new Idol2(
            object.name,
            object.year
        );
    }

    static fromList(list) {
        return new Idol2(
            list[0],
            list[1],
        )
    }
}

const yujin2 = Idol2.fromObject({
    name: '안유진',
    year: 2003
});
console.log(yujin2);


const liz2 = Idol2.fromList(
    [
        '리즈',
        2004,
    ]
);
console.log(liz2);