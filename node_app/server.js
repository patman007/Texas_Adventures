const express = require('express')
const app = express()
const mongoose= require('mongoose')
const bodyParser= require('body-parser')
const fetch = require('node-fetch')
const axios = require('axios');
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
// // parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
// // parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
// const Bluebird = require('bluebird');
// fetch.Promise = Bluebird;
app.use(express.static('public'))
PORT= process.env.PORT || 3000


  // https://developer.nps.gov/api/v1/parks?stateCode=texas&api_key=hNdp9FdWfJRXxC48PNwvA1ffZxzbokHVs2P7Dzfi
//   let pApi_Key = 'pmBnVo1MoSqhZcTEhSBPhAxdaS5GQvG0lPyDCvRY'
let pApi_Key = 'hNdp9FdWfJRXxC48PNwvA1ffZxzbokHVs2P7Dzfi'
  let parksUrl = `https://developer.nps.gov/api/v1/parks?stateCode=TX&api_key=${pApi_Key}`
  let fullData=[]
  // Weather API
  let wApi_Key = '27fe525266ca77d7607f290c665c9860';
  let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&units=imperial&appid=${wApi_Key}`
app.get('/', (req,res)=>{
    res.render('login.ejs')
})
app.get('/search', (req,res)=>{
    res.render('search.ejs')
})
app.get('/favorites',(req,res)=>{
    res.render('favorites.ejs')
})
//
app.get('/city',(req,res)=>{
let city= req.query.city
console.log(city)
let wApi_Key = '27fe525266ca77d7607f290c665c9860';
let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${wApi_Key}`
let pApi_Key = 'hNdp9FdWfJRXxC48PNwvA1ffZxzbokHVs2P7Dzfi'
  let parksUrl = `https://developer.nps.gov/api/v1/parks?stateCode=TX&q=${city}&api_key=${pApi_Key}`
// console.log(parksUrl)

// calling parks url
  axios.get(parksUrl)
// digging into the response to get our data object
  .then(response=>{
        // console.log(response.data.data[0])
        // if the results turn up as a non existent city or 0 we will be redirected to the error page
      if(response.data.total <=0 ){
          throw Error('No data recieved not a valid city or no parks fouond ')
      }else{
          //returning response
      return response.data.data[0]
      }
  })
  .then(data=>{
    let park= data
    //   console.log(data)
                // calling out weather api
                axios.get(weatherUrl)
            .then(response=>{
            return response.data
            })
            .then(weatherdata=>{
            console.log(weatherdata)
            var results={weatherdata,park}
            //sending our results into our results ejs
            console.log(data)
          // ned if statement to match with both apis 
                 res.render('results.ejs',{results})
            
           
            })
            .catch(err=>{
                console.log('Error connecting to api: ', err)
                res.render('error.ejs')
            })
  })
  .catch(err=>{
      console.log('No city found: ', err)
    
      res.render('error.ejs')
  })


})

app.get('/random',(req,res)=>{
 
    axios.get(parksUrl)
    .then(response=> {
        if(response.data.total <=0 ){
            throw Error('No data recieved not a valid city or no parks found ')
        }else{
            //returning response
        return response.data.data
        }
    })
    .then(data=>{
       
         var randomCityIndex = Math.floor(Math.random()*data.length -1 ) + 1
         // console.log('This is the index:',data.data[randomCityIndex])
            // console.log(data.length)
            // console.log(data[randomCityIndex])
          const City = data[randomCityIndex].addresses[0].city
           let park= data[randomCityIndex]
         console.log(park)
        // console.log(data.data[randomCityIndex])
            
         let wApi_Key = '27fe525266ca77d7607f290c665c9860';
         let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperial&appid=${wApi_Key}`

                axios.get(weatherUrl)
                .then(response=>{
                    return response.data
                })
                .then(weatherdata=>{
                    console.log(weatherdata)
                    var results = {weatherdata, park}
                    res.render('results.ejs',{results})
                })
                .catch(err=>{
                    console.log('Error recieving data from weather api: ', err)
                  
                })
                
     })
    .catch(err=>{
         console.log('Error connecting to api: ', err)
        res.render('error.ejs')

     })
    });






app.listen(PORT,()=>{
    console.log('App listening on PORT: ', PORT)
})