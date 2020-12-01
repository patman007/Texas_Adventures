const express = require('express')
const app = express()
const mongoose= require('mongoose')
const bodyparser= require('body-parser')

app.use(express.static('public'))

PORT= process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.render('login.ejs')
})



app.get('/search', (req,res)=>{
    res.render('search.ejs')
})



app.listen(PORT,()=>{
    console.log('App listening on PORT: ', PORT)
})