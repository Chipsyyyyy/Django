async function getWeather(city) {
    const url = `/api/weather/?city=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok){
            document.getElementById('wCity').innerText = data.name;
            document.getElementById('wTemp').innerText = `${Math.round(data.main.temp)}°C`
            
            const iconCode = data.weather[0].icon;
            document.getElementById('wIcon').src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
        } else {
            alert("City not found or server error.");
        }
    }   catch (error){
            console.log(error)
    }
}