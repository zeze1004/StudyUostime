//const는 한 번 선언하면 바꿀 수 없기 때문에 보통 모듈 선언할 때는 const로 사용

//express 모듈 로드 + 터미널에 npm install express
const express = require('express'); //express라는 상수에 express 저장(const: 상수 지정)
//var express = require('express'); //express라는 변수에 express 저장(var: 변수 지정)

//http 모듈 로드 + http는 자체 모듈이어서 따로 다운 받지 않아도 ㅇㅋ
const http  = require('http');
// const route  = require('./route.js'); // ./ : 현재 폴더의 route.js를 가져와라
// mongoose 설치
const mongoose = require('mongoose');
const { create } = require('./models/Message');
const MessageController = require('./controllers/MessageController');


var app = express(); //앞서 정의한 상수를 함수처럼 호출
var httpServer = http.createServer(app); //http 모듈 내의 서버생성 함수, http 만들어 줌

//use body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

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

// test.ejs에서 my_button누르면 유저가 입력한 값을 서버가 받음?
app.post('/message',function(req,res){
    // req.body.message의 body는 test.ejs의 json key값들s
    let message = req.body.message;
    // req는 서버가 요청하는 거, res는 서버가 받는 거

    MessageController.createMessage(message); 
    console.log('user say: '+ message);
    res.send('Server got a message: '+ message); 
    
});

//mybuttonFind(find a message)
app.get('/message',function(req,res){
    MessageController.findMessage(res);
 
});



//app.use(express.static('views.silverwo.png')); -> 은우사진 띄우기

//DB연결 json 방식
mongoose.connect('mongodb+srv://admin:cafe9192@mycluster.jezsv.gcp.mongodb.net/MyCluster?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}, function(err){
    if(err){
        console.log(err);
    } else {
        //DB 연결 시 에러가 없었으면, 서버 시작
        httpServer.listen(8080);
        // 실행 성공 시 뜨는 로그
        console.log("서버 성공");
    }
});


//서버 시작
//httpServer.listen(8080); //포트 번호 8080으로 임의설정


//express 사용

console.log("hello, world!");
