document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const city = document.getElementById('cityInput').value;
    const apiKey = 'a96743026b6523ed7c475c1dcca9fdec';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            return response.json();
        })
  
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} °F</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} mph</p>
            `;
        })
  
        .catch(() => {
            document.getElementById('weatherResult').innerHTML = '<p>Something went wrong. Please try again.</p>';
        });
});