const apiKey = "6fb13fe0a710d66a64824c1fdfcde5a9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=6fb13fe0a710d66a64824c1fdfcde5a9&units=metric";

const searchValue = document.querySelector('#text-input');

const city = document.querySelector('.city-name');
console.log(city);

const button = document.querySelector('.btn');
const icon = document.querySelector('.weather-icon');





async function weather(city){

    const res = await fetch(apiUrl + `&q=${city}`);
    const weatherJson = await res.json();
    console.log(weatherJson);

    

    document.querySelector('.city-name').textContent = weatherJson.name;
    document.querySelector('.temperature').textContent=Math.round(weatherJson.main.temp) + "°C";
    document.querySelector('.humid').textContent=Math.round(weatherJson.main.humidity) + " %";
    document.querySelector('.wind').textContent=weatherJson.wind.speed + "km/h";


    if(weatherJson.weather[0].main=="Snow"){
        icon.src = "img/snow.png";

    }
    else if(weatherJson.weather[0].main=="Clear"){
        icon.src = "img/clear.png";
    }

    else if(weatherJson.weather[0].main=="Mist"){
        icon.src="img/mist.png";
    }
    
    else if(weatherJson.weather[0].main=="Drizzle"){
        icon.src="img/drizzle.png";
    }

    else if(weatherJson.weather[0].main=="Clouds"){
        icon.src="img/clouds.png";
    }
    
}

button.addEventListener('click',()=>{
    weather(searchValue.value);
})

    
        
//         // let rem = searchValue.value.slice(1);
//         // let first = searchValue.value[0].toUpperCase();
//         // city.textContent=first+rem;


//     const res = await fetch(apiUrl + `&q=${"patna"}`);
//     const weatherJson = await res.json();
//     console.log(weatherJson);






                                // Working
// const changeWeather = ()=>{

//     button.addEventListener('click',()=>{
//         let rem = searchValue.value.slice(1);
//         let first = searchValue.value[0].toUpperCase();
//         city.textContent=first+rem;
//     });
//     console.log(searchValue.value);
    
// }


// button.addEventListener('click',changeWeather);

