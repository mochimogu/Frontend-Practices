const api_key = "pY9195MDUFizYZRvqwHm90mFlDyfdiHh"


async function getForecast() {

    const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=minnesota&apikey=${api_key}`)

    if(response.ok) {
        const results = await response.json();
        
        console.log(results);
        console.log(results.timelines.daily)
        const weatherCardContainer = document.getElementById('weatherCard');
        const dailyForecast = results.timelines.daily;

        for(let i = 0; i < dailyForecast.length; i++) {
            const weatherCard = document.createElement('div');
            const weatherMax = document.createElement('h1');
            const weatherMin = document.createElement('h3');
            const time = document.createElement('p');

            time.innerText = dailyForecast[i].time;
            weatherMax.innerText = dailyForecast[i].values.temperatureMax + " °C";
            weatherMin.innerText = dailyForecast[i].values.temperatureMin + " °C";

            weatherCard.appendChild(time);
            weatherCard.appendChild(weatherMax);
            weatherCard.appendChild(weatherMin);

            weatherCardContainer.appendChild(weatherCard);
        }

    } else {
        console.log("error : ", response.status);
    }
}



window.addEventListener('DOMContentLoaded', () => {

    getForecast();

})

