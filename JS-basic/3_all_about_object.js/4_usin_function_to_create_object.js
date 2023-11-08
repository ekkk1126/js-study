function Idol(name, year) {

    //new 키워드 여부 없이 아래 객체 생성가능
    if (!new.target) {
        return new Idol(name, year)
    }

    this.name = name;
    this.year = year;

    this.dace = function () {
        return `${this.name}이 춤을 춘다.`
    }
}
const yujin = new Idol('안유진', 2003);
console.log(yujin);
console.log(yujin.dace());

// new 키워드 없이 함수형으로 실행시 => 함수 반환이 없기 때문에 undefined
const yujin2 = Idol('안유진', 2003);
console.log('------------')
console.log(yujin2);

// 이 파일이 실행될 때 자동으로 생성되는 객체
// new 키워드 사용 없이 생성자 함수 실행시 => this 키워드가 global에 붙어 => global의 값을 설정하게 됨 (사용X)
console.log(global.name);

const IdolArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

// TypeError: IdolArrow is not a constructor
// new 키워드는 일반 함수에서만 사용 가능 (Arrow 함수 사용 불가)
const yujin3 = new IdolArrow('안유진', 2003);
