const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityinput')

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        const cityName = cityInput.value.trim();

    if (cityName){
        getWeather(cityName);
    } else {
        alert("Please enter a city name.")
        }
    }

    
});

async function getWeather(city) {
    const url = `/api/weather/?city=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (response.ok){
            document.getElementById('wCity').innerText = data.name;
            document.getElementById('wTemp').innerText = `${Math.round(data.main.temp)}°C ${data.weather[0].description}`;
            
            const iconCode = data.weather[0].icon;
            document.getElementById('wIcon').src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
            
            cityInput.value = '';
            cityInput.blur();
        } else {
            alert("City not found or server error.");
        }
    }   catch (error){
            console.log(error)
    }
}