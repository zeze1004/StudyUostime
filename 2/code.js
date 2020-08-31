const express = require('express')
const app = express()
// public폴더는 정적참조
app.use(express.static('public'))
// /이라는 경로로 오는 GET 요청에 대해
app.get('/', function (req, res) {
// 응답
  res.send('Hello World')
})
 
app.listen(3000)