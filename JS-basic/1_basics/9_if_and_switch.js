// 조건문
// if문
let num = 5;

if (num % 2 === 0) {
    console.log('num은 짝수');
} else {
    console.log('num 홀수');
}

if (num % 2 === 0) {
    console.log('2의 배수이다')
} else if (num % 3 === 0) {
    console.log('3의 배수이다')
} else {
    console.log('2, 3의 배수가 아니다.')
}

// Switch문
const en_day = 'monday';
let kr_day;

switch (en_day) {
    case 'monday':
        kr_day = '월요일';
        break;
    case 'tuesday':
        kr_day = '화요일';
        break;
    case 'wednesday':
        kr_day = '수요일';
        break;
    case 'thursday':
        kr_day = '목요일';
        break;
    case 'friday':
        kr_day = '금요일';
        break;
    default:
        kr_day = '주말';
        break;
}

console.log(kr_day);