const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);    // mongoose가 제공하는 함수를 사용하기 위한 set
mongoose.set('useCreateIndex', true);        
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect('mongodb://127.0.0.1:27017/addr', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db 