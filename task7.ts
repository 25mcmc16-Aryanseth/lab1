
type GeoData = {
    latitude: number;
    longitude: number;
    name: string;
};


const cityInput = document.getElementById("cityInput") as HTMLInputElement;
const resultBox = document.getElementById("result") as HTMLDivElement;



(window as any).getWeather = async function (): Promise<void> {

    const city = cityInput.value.trim();

    if (!city) {
        resultBox.innerText = "Please enter a city name";
        return;
    }

    resultBox.innerText = "Loading...";

    try {
        
        const geoUrl =
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;

        const geoRes = await fetch(geoUrl);
        const geoJson = await geoRes.json();

        if (!geoJson.results || geoJson.results.length === 0) {
            resultBox.innerText = "City not found";
            return;
        }

        const place: GeoData = geoJson.results[0];

        
        const weatherUrl =
            `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current_weather=true`;

        const weatherRes = await fetch(weatherUrl);
        const weatherJson = await weatherRes.json();

        const w = weatherJson.current_weather;

        
        resultBox.innerHTML =
            `<h3>${place.name}</h3>
             Temperature: ${w.temperature} °C <br>
             Wind Speed: ${w.windspeed} km/h`;

    } catch (err) {
        resultBox.innerText = "Error getting weather data";
        console.log(err);
    }
};
