// city HTML id as a variable
let city = document.getElementById("city");
// parkName HTML id as a variable
let parkName = document.getElementById("parkName")
// weather HTML id as a variable
let weather = document.getElementById("weather");

// //LATITUDE as a variable
// let lat = document.getElementById("lat");
// //LONGTITUDE as a variable
// let long = document.getElementById("long")
// // Submit button as variable
// let btn = document.getElementById('btn')

//when button clicked, no reload, fires GET request to Parks API
btn.addEventListener('click', getCity => {
    getCity.preventDefault(); 
    console.log("button click worked")
    
// Parks API
let parksApi_key = 'pmBnVo1MoSqhZcTEhSBPhAxdaS5GQvG0lPyDCvRY'
let parksUrl = `https://developer.nps.gov/api/v1/parks?stateCode=TX&api_key=${parksApi_key}`

//Fetches Parks API details 
fetch(parksUrl)
.then((res) => {
    return res.json()
// Setting Park JSON data into variables with returned Parks API JSON
.then((data) => {
    let cityData = data.data[0].addresses[1].city
    let parkNameData = data.data[0].fullName
//Appending Parks API JSON to HTML id <p> tags
city.append(cityData)
parkName.append(parkNameData)

// Weather API
let weatherApi_key = '27fe525266ca77d7607f290c665c9860';
let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${weatherApi_key}`

//Fetches Weather API using "cityData" in URL, gathered from Parks API 
fetch(weatherUrl)
.then((weatherRes) => {
    return weatherRes.json()
// Setting Weather JSON data into variables with returned Weather API JSON
// Returns data from cityData 
.then((weatherData)=>{
    let tempData = weatherData.weather[0].description
// Appending weather results to HTML id <p> tags
weather.append(tempData.toUpperCase())
  
})
.catch(err => console.error('Error connecting', err))
})
})

    })

  })
  
 



// btn.addEventListener('click', event  => {
//     event.preventDefault();

//     //4 parts to the fetch API
//     fetch(parksUrl)
//     .then( res => {
//         console.log(res);
//         if(res.ok) {
//             return res.json().data[0].addresses[1].city;
//         }
        
//     })  

//     .then(data =>  {   
//         const city = data.city
//         city.innerHTML = 'City: '+ City
//         // const City = data.data[0].addresses[1].city
//         // do your second fetch using specific city from "data"

//         // should return some weather data
//         fetch(weatherUrl)
//         // .then()
//         // .then()
//         // .catch()

//         // console.log(data.data[0])    
//         // console.log (data.data[0].addresses[1].city)

//     })
//     .then(weatherdata => {
//         // show both the park and weather data on browser
//     })           
//     //Catch an error to show in console.log message
//     .catch(err => console.error('Error connecting', err))
// });
// // console.log(data.data[0].addresses[1].city)

// let City = document.getElementById('city')
// //Url and API key
// console.log('City is ', City)
// // 'http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=27fe525266ca77d7607f290c665c9860'

// console.log('Url is ', url);

// // api.openweathermap.org/data/2.5/find?q=London&units=metric

// //Event Listener
// //When the Need a drink button is clicked by the user 
// //the fetch steps statement will be initiated
// btn.addEventListener('click', event  => {
//     event.preventDefault();
//     //4 parts to the fetch API
//     fetch(url)
//     .then(function(res) {
//         console.log(res);
//         if(res.ok) {
//             return res.json();
//         }
//         // throw Error('Weather API is not working !!!')
//     })   
//     .then(data =>  {        
//         console.log('data is : ', data )       
//         // city.innerHTML = 'City: '+data.name
//         city_id.innerHTML = 'City ID: '+data.id                     
//         temp.innerHTML = 'Temperature: '+ data.main.temp        
//         lat.innerHTML = 'Latitude: '+data.coord.lat
//         long.innerHTML = 'Longitude: '+data.coord.lon                      
//     })
//     //Catch an error to show in console.log message
//     .catch(err => console.error('Error connecting', err))
// });


