// Promise, async await 나오기 전에 callback 방법
// ms 먼저 실행 한 다음에,,,next 실행...?
/*
function delay(ms, next) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(2)
            next()  // callback 함수를 주로 next 함수명
            resolve()
        },ms)
    })
}

delay(3000,function () {
    console.log(1)
        delay(3000,function () {
            console.log(3)
            delay(3000,function () {
                console.log(5)
        })
    })
})
*/
// 2 1 2 3 2 5 콜백 출력

// Promise
function delayPromise(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(2)
            // next가 없어졌다
            resolve() // 함수 호출 후 resolve 호출하면 정상적으로 호출 끝났다?
            // .then이 resolve로 호출된당?ㅅ?
            // reject는 오류로 끝났을 때 호출된다?ㅅ?
        },ms)
    })
}
delayPromise(1000)
// 요론식으로 간편하게 쓸 수 있당 흑흑 뭐가 또 생김
.then(() => {
    console.log(1)
})
.then(() => {
    console.log(1)
})
.then(() => {
    console.log(1)
})


Promise
.resolve(1)
.then(n1 => {       // n1 = 1
    console.log(n1)
    return n1 + 1
})
.then(n2 => {       // n2 = n1 + 1 = 2
    console.log(n2)
    return n2 + 1
})
.then(n3 => {       // n3 = 3
    console.log(n3)
    return n3 + 1
})


connectDB() // 모야 돌려줘요
// DB 작업 후 USER 함수 호출...? 옷 납두고 왔다 너무 춥다 
.then(DB => {       // n1 = 1
    console.log(n1)
    return USER
})
.then(USER => {       // n2 = n1 + 1 = 2
    console.log(n2)
    return ID
})
.then(ID => {       // n3 = 3
    console.log(n3)
    return 
})
/*
Promise
.then // 이전의 비동기 코드가 완료된 후 이것을 실행
.catxh // 이전의 비동기 코드에서 에러 발생시 실행

.all // 모두 작업 끝나면 .then으로 이동
.race // 하나라도 resolve(수행 완료)되면 .then으로 이동
*/ 



// async await
// await는 화려한 async가 감싸야한다
async function f(){
    try {
        // resolve 된 함수를 n1에 저장?
        let n1 = await Promise.resolve(1)
        console.log(n1)
        let n2 = n1 + 1
        console.log(n2)
        // throw "에러잡는 구문?으로 이동시키는 명령문"
        let n3 = n2 + 1
        console.log(n3)
    } catch(error) {       // n2 = n1 + 1 = 2           
        console.log(error)
    }
}

f()