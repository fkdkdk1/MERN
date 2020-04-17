const express = require('express')          // 웹서버 모듈
const cors = require('cors')                // 자바스크립트 객체를 MongoDB 객체로 매핑
const bodyParser = require('body-parser')   // http요청 데이터를 파싱하는 미들웨어

const db = require('./db')
const addrRouter = require('./routes/addr-router')

const app = express()
const port = process.env.PORT || 3001;

db.once('open', function(){
    console.log('DB Connected');
});

// DB 연결중 에러가 있으면 "DB ERROR :" 와 에러를 출력
db.on('error', function(err){
    console.log('DB ERROR : ', err);
});

// Other Settings
app.use(bodyParser.json());                         // Json 형식의 데이터를 받겠다, form에 입력한 데이터가 bodyParser를 통해 form으로 입력받은 데이터를 사용 가능
app.use(bodyParser.urlencoded({extended:true}));    // unlencoded data를 extended 알고리즘을 사용하여 분석한다는 설정
app.use(cors())

app.use('/api', addrRouter)

app.listen(port, function(){
    console.log('server on! ' + port);
});