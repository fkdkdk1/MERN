// MongoDB 스키마 정의

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Addr = new Schema(
    {
        name : {type:String, required:true, unique:true},
        email : {type:String},
        phone : {type:String}
    });

    module.exports = mongoose.model('addr', Addr)
    // DB에 있는 Addr이라는 데이터 콜렉션을 현재 코드의 addr이라는 변수에 연결