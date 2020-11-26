//WEATHER API INFO
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
//HUMIDITY as a variable
let humidity = document.getElementById("humidity")
//WIND SPEED as a variable
let wind = document.getElementById("wind")


//PARKS API INFO
//FULL NAME as a variable
let fullName = document.getElementById("fullName")
//PARK DESCRIPTION
let description = document.getElementById("description")
//MAILING as a variable
let mailing = document.getElementById("mailing")
//PARK ADDRESS as a variable
let parkAddress = document.getElementById("parkAddress")
//STATECODE as a variable
let stateCode = document.getElementById("stateCode")
//ZIP CODE as a variable
let zip = document.getElementById("zip")
//URL as a variable
let parkWebsite = document.getElementById("parkWebsite")

//Button variable by Ids
let btn = document.getElementById('btn');


// Parks API
let pApi_Key = 'pmBnVo1MoSqhZcTEhSBPhAxdaS5GQvG0lPyDCvRY'
let parksUrl = `https://developer.nps.gov/api/v1/parks?stateCode=TX&api_key=${pApi_Key}`

// Weather API
let wApi_Key = '27fe525266ca77d7607f290c665c9860';
let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&units=imperial&appid=${wApi_Key}`

btn.addEventListener('click', event  => {
    event.preventDefault();

    //4 parts to the fetch API
    fetch(parksUrl)
    .then(function(res) {
        console.log(res);
        if(res.ok) {
            // return res.json().data[0].addresses[1].city;
            return res.json()
        }
        // throw Error('Weather API is not working !!!')
    })   
    .then(data =>  {    
        // do your second fetch using specific city from "data"
        // should return some weather data
        fetch(url)
        .then()
        .then()
        .catch()

        console.log(data.data[0].addresses[1])    
        console.log(data.data[0].addresses[1].city)       
        
        // National Park City
        const City = data.data[0].addresses[1].city
        console.log('City is ', City)
        city.innerHTML = 'City: '+ City;

        //Patrick Additions
        // National Park Full Name
        fullName.innerHTML = `Park Full Name: ${data.data[0].fullName}`;

        //National Park Website
        parkWebsite.innerHTML = `Park Website: ${data.data[0].url}`;
        parkWebsite.setAttribute('href', `${data.data[0].url}` )

        //National Park Description 
        description.innerHTML = `Park Desciption: ${data.data[0].description}`;

        //National Park Address Type
        mailing.innerHTML = `Park Address Type: ${data.data[0].addresses[1].type}`;

        //National Park Mailing Address
        parkAddress.innerHTML = `Park Address: ${data.data[0].addresses[1].line1}`;

        //National Park StateCode
        stateCode.innerHTML = `Park State Code: ${data.data[0].addresses[1].stateCode}`;

        //National Park Zip Code
        zip.innerHTML = `Park Zip Code: ${data.data[0].addresses[1].postalCode}`;
    })
    .then(weatherdata => {
        // show both the park and weather data on browser
    })           
    //Catch an error to show in console.log message
    .catch(err => console.error('Error connecting', err))
});
// console.log(data.data[0].addresses[1].city)

let City = document.getElementById('city')
//Url and API key
console.log('City is ', City)
let apiKey = '27fe525266ca77d7607f290c665c9860'
let url= `http://api.openweathermap.org/data/2.5/weather?q=Fritch&units=imperial&appid=${apiKey}`

//Current and Hourly Updates API
//Fritch
// let url='https://api.openweathermap.org/data/2.5/onecall?lat=35.64&lon=-101.6&units=imperial&exclude=minutely,alerts,daily&appid=27fe525266ca77d7607f290c665c9860'


console.log('Url is ', url);

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
        // throw Error('Weather API is not working !!!')
    })   
    .then(data =>  {        
        console.log('data is : ', data )       
        city.innerHTML = `City: ${data.name}`;
        city_id.innerHTML = `City ID: ${data.id}`;                     
        temp.innerHTML = `Temperature (Farhenheit): ${data.main.temp} degrees`;              
        lat.innerHTML = `Latitude: ${data.coord.lat}`;
        long.innerHTML = `Longitude: ${data.coord.lon}`; 
        humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        wind.innerHTML = `Wind Speed: ${data.wind.speed} Miles/Hour`;                                    
    })
    //Catch an error to show in console.log message
    .catch(err => console.error('Error connecting', err))
});


