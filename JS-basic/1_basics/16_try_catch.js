/**
 * try ... catch
 * : 에러를 잡는데 사용
 * 
 * 1. 발생시킬 때 -> 던진다고 함 (throw)
 * 2. 명시적으로 인지할 떄 -> 잡는다고 함 (catch)
 */

function runner() {
    try {
        console.log('Hello');

        // 새로운 에러 객체 생성 
        // 에러를 던지는 순간 함수의 다음 코드 실행X
        throw new Error('문제 생김');

        console.log('World');
    }
    // 에러를 던지면 바로 catch 문으로 이동해 실행
    catch (e) {
        console.log('------Catch-------')
        console.log(e);
    } finally {   // try에서 에러여부 상관업시 무조건 실행하는 코드
        console.log('----------finally-------------')

    }
};

runner();


