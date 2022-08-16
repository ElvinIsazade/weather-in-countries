const title = document.querySelector("h1");
const temperature = document.querySelector(".temp");
const image = document.querySelector("img");
const descript = document.querySelector("span");
const humid = document.querySelector(".humidity");
const windy = document.querySelector(".wind");
const form = document.querySelector("form");
const search=document.querySelector("#search");
console.log(search.value);

async function getWeather (){
    try {
        if(search.value==""){
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Azerbaijan&units=metric&appid=16387e8ff859fea479e6fde976c6be4e`)
            const data = await res.json();
            showWeather(data);
        }
        else{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=16387e8ff859fea479e6fde976c6be4e`)
            const data = await res.json();
            showWeather(data);
        }
        console.log(data);

    }
    catch (err){
        console.log(err.message);
    }
}
getWeather()



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    getWeather();
});

function showWeather (data){
    const name = data.name;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const speed = data.wind.speed;


    
    title.innerText= `${name} da hava`;
    temperature.innerText = `${temp} °C`;
    image.src= "http://openweathermap.org/img/wn/" + icon +".png";
    descript.innerText = `${description}`;
    humid.innerText = `${humidity} %`;
    windy.innerText = `${speed} km/saat`;
    document.querySelector(".weather_content").classList.remove("load");
    document.body.style.backgroundImage=`url('https://source.unsplash.com/1600x900/?${name}')`;
}

