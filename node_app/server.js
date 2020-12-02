const express = require('express')
const app = express()
const mongoose= require('mongoose')
const bodyparser= require('body-parser')
const fetch = require('node-fetch')
app.use(express.static('public'))

PORT= process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.render('login.ejs')
})



app.get('/search', (req,res)=>{
    res.render('search.ejs')
})

app.get('/random',(req,res)=>{
    let pApi_Key = 'pmBnVo1MoSqhZcTEhSBPhAxdaS5GQvG0lPyDCvRY'
    let parksUrl = `https://developer.nps.gov/api/v1/parks?stateCode=TX&api_key=${pApi_Key}`
    let fullData=[]
    // Weather API
    let wApi_Key = '27fe525266ca77d7607f290c665c9860';
    let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&units=imperial&appid=${wApi_Key}`
    

    
        //4 parts to the fetch API
        fetch(parksUrl)
        .then(function(res) {
           
            if(res.ok) {
                // return res.json().data[0].addresses[1].city;
                console.log(res.json())
                return res
            }
            // throw Error('Weather API is not working !!!')
        })   
        .then(data =>  {    
            // do your second fetch using specific city from "data"
            // should return some weather data
          
            console.log(data)
            var randomCityIndex = Math.floor(Math.random()*data.data.length -1) + 1
           
            // National Park City
            const City = data.data[randomCityIndex].addresses[0].city
            fullData.push(data.data[randomCityIndex])
           
          
    
    
            let apiKey = '27fe525266ca77d7607f290c665c9860'
            let url= `http://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperial&appid=${apiKey}`
            fetch(url)
                .then(function(res) {
                   
                    if(res.ok) {
                        return res.json();
                    }
                    // throw Error('Weather API is not working !!!')
                })   
                .then(Weather =>  {        
                      fullData.push(Weather)                                
                })
                
        })
         .then(data=>{
            console.log(fullData)
         })       
        //Catch an error to show in console.log message
        .catch(err => console.error('Error connecting', err))
        
    });



app.get('favorites',(req,res)=>{
    res.render('favorites.ejs')
})


app.listen(PORT,()=>{
    console.log('App listening on PORT: ', PORT)
})