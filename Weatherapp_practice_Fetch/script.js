//CITY as a variable
let city = document.getElementById("city");
//CITY ID as a variable
let city_id = document.getElementById("city_id")
//TEMP as a variable
let temp = document.getElementById("temp");
//LATITUDE as a variable
let lat = document.getElementById("lat");
//LONGTITUDE as a variable
let long = document.getElementById("long")


//Button variable by Ids
let btn = document.getElementById('btn');



//Consume API Key
let apiKey = 'pmBnVo1MoSqhZcTEhSBPhAxdaS5GQvG0lPyDCvRY'
let endpoint = `https://developer.nps.gov/api/v1/parks?stateCode=TX&api_key=${apiKey}`
console.log(endpoint)


btn.addEventListener('click', event  => {
    event.preventDefault();

    //4 parts to the fetch API
    fetch(endpoint)
   
    .then(function(res) {
        console.log(res);

        if(res.ok) {

            return res.json();
        }
        throw Error('Weather API is not working !!!')
    })   
    
    .then(data =>  {    
            console.log(data.data[0])    
             console.log (data.data[0].addresses[1].city)

             const City = data.data[0].addresses[1].city

             console.log(City)

             return City
    })           
      
    //Catch an error to show in console.log message
    .catch(err => console.error('Error connecting', err))
});
console.log(data.data[0].addresses[1].city)




//Url and API key
// 'http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=27fe525266ca77d7607f290c665c9860'
let api_key = '27fe525266ca77d7607f290c665c9860';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${api_key}`

console.log(url);

// api.openweathermap.org/data/2.5/find?q=London&units=metric

//Event Listener
//When the Need a drink button is clicked by the user 
//the fetch steps statement will be initiated
btn.addEventListener('click', event  => {
    event.preventDefault();

    //4 parts to the fetch API
    fetch(url)
   
    .then(function(res) {
        console.log(res);

        if(res.ok) {

            return res.json();
        }
        throw Error('Weather API is not working !!!')
    })   
    
    .then(data =>  {        
        console.log('data is : ', data )       
        city.innerHTML = 'City: '+data.name
        city_id.innerHTML = 'City ID: '+data.id                     
        temp.innerHTML = 'Temperature: '+ data.main.temp        
        lat.innerHTML = 'Latitude: '+data.coord.lat
        long.innerHTML = 'Longitude: '+data.coord.lon                      
    })           
                                         

    //Catch an error to show in console.log message
    .catch(err => console.error('Error connecting', err))
});


