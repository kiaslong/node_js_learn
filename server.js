const express =require('express')
const app = express()
const ejs = require('ejs');

app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express);

app.get("/",(req, res)=>{
    console.log('Here')
    res.render('index')
    
})

const userRouter = require('./routes/tables')
app.use('/tables', userRouter)

app.listen(8080)