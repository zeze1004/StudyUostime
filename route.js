app.get('/login',(req,res) =>{ // '/'는 최상위 루트이다 사이트 그 자체?
    res.send(Date.now().toString());
});

//어떤 값을 외부로 내보낼 수 있는지 지정해준다. :private

exports.somevalue = 3; //somevalue라는 객체를 외부에서 사용할 수 있다 

