class WeatherDataService{
  constructor() {
    this.apiKey = "4f9cbce0da2f60fab520b8667ce7c48c";
  }

  getCurrentWeather() {
    const API = `https://api.openweathermap.org//data/2.5/weather?q=Kyiv&units=metric&appid=4f9cbce0da2f60fab520b8667ce7c48c`;
    return fetch(API).then(response => {
      if(response.ok) {
        return response.json();
      } else {
        Promise.reject(response.statusText);
      }
    });
  }

  getWeatherForecast() {
    const API = `https://api.openweathermap.org//data/2.5/forecast?q=Kyiv&units=metric&appid=4f9cbce0da2f60fab520b8667ce7c48c`;
    return fetch(API).then(response => {
      if(response.ok) {
        return response.json();
      } else {
        Promise.reject(response.statusText);
      }
    });
  }
}

export default new WeatherDataService();
