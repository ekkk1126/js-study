const age = 21;
const temperature = 30;
const infinity = Infinity;
const uinfinity = -Infinity;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof infinity);
console.log(typeof uinfinity);


const month = '7월';
console.log(typeof month);

const date = "'15'일";
console.log(date);
console.log(typeof date);

const iveYuJin = '아이브\n유진';
console.log(iveYuJin);

const iveLiz = '아이브\t리즈'
console.log(iveLiz);

const backSlash = '아이브\\백슬레시';
console.log(backSlash);

const smallQutoation = '아이브\`작은따옴표';
console.log(smallQutoation);

const iveYuJin2 = `아이브
안유진`;
console.log(iveYuJin2);

const group = '아이브';
console.log(group + '안유진');
console.log(`${group} 안유진`);

const isTrue = true;
const isFalse = false;
console.log(isTrue);
console.log(isFalse);

let noInit;
console.log(noInit);
console.log(typeof noInit);

let init = null;
console.log(init);
console.log(typeof init);

const test1 = '1';
const test2 = '1';
console.log(test1 == test2);

const symboll1 = Symbol('1');
const symboll2 = Symbol('1');
console.log(symboll1 == symboll2);

const dic = {
    red: '빨간색',
    orange: '오렌지색',
    yellow: '노락색'
};
console.log(dic);
console.log(dic['red']);
console.log(typeof dic);

const numArray = [
    '1', '2', '3', '4', '5', '6', '7'
];
console.log(numArray);
console.log(numArray[0]);

numArray[0] = '0';
console.log(numArray);

console.log(typeof numArray);
