//express 모듈 로드
const express = require('express'); //express라는 상수에 express 저장(const: 상수 지정)
//var express = require('express'); //express라는 변수에 express 저장(var: 변수 지정)

const http  = require('http');
// const route  = require('./route.js'); // ./ : 현재 폴더의 route.js를 가져와라



var app = express(); //앞서 정의한 상수를 함수처럼 호출
var httpServer = http.createServer(app); //http 모듈 내의 서버생성 함수, http 만들어 줌

app.use(express.static('public')); //정적파일들(ex.이미지,css파일 등)은 바뀌지 않는다 -> 폴더 그대로 넘겨주면 띄운다

//view engine이라는 속성을 ejs로 바꾼다?????
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //__dirname + 폴더이름 : 절대 경로 , 앞으로 views폴더 따로 안써도 됌~


    //html이 아닌 파일을 html 파일로 렌더링해준다.
    
app.get('/', function(req,res){
    res.render('test.ejs',  //app.set에서 views폴더로 옮겼기 때문에 바로 ejs 파일명 작성
    {       
    //id라는 변수에 hello 입력
    //ejs 파일에 변수를 넣어준다
        id: 'hello',
        age: 2 //매개변수를 추가
    }); 
});



//app.use(express.static('views.silverwo.png')); -> 은우사진 띄우기


//서버 시작
httpServer.listen(8080); //포트 번호 8080으로 임의설정


//express 사용

console.log("hello, world!");
