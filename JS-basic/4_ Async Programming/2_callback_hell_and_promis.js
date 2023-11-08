// 콜백 함수 : 특정 작업이 끝난 뒤, 다시 굴리는 함수

function waitAndRun() {
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}

// waitAndRun();


function waitAndRun2() {
    setTimeout(
        () => {
            console.log('1번 콜백 끝');

            setTimeout(() => {
                console.log('2번 콜백 끝');

                setTimeout(() => {
                    console.log('3번 콜백 끝');
                }, 2000)
            }, 2000)
        }, 2000);
}

// waitAndRun2();


// promise
// resolve
// reject

// const timeoutPromis = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('완료');        // 값 반환
//     }, 2000)
// });

// resolve 함수가 실행되는 순간에 반환받은 Promise 객체에 then을 붙이면 반환값을 받을 수 있음
// reject : 에러를 던짐
// timeoutPromis.then((res) => {
//     console.log(res);
// });

// const getPromise = (seconds) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('완료');
//     }, seconds * 1000);
// });

// getPromise(1)
//     .then((res) => {
//         console.log('-- first then --');
//         console.log(res);

//         return getPromise(3);
//     }).then((res) => {
//         console.log('-- second then --');
//         console.log(res);
        
//         return getPromise(4);
//     }).then((res) => {
//         console.log('-- third then --');
//         console.log(res);
        
//         return getPromise(4);
//     })



// timeoutPromis.then((res) => {
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('에러');
    }, seconds * 1000);
});

getPromise(1)
    .catch((res) => {
        console.log('-- first catch --');
        console.log(res);

        return getPromise(3);
    }).catch((res) => {
        console.log('-- second catch --');
        console.log(res);
        
        return getPromise(4);
    }).catch((res) => {
        console.log('-- third catch --');
        console.log(res);
        
        return getPromise(4);
    })