class WeatherDataService{
  constructor() {
    this.apiKey = '4f9cbce0da2f60fab520b8667ce7c48c';
    this.URL = 'https://api.openweathermap.org//data/2.5/';
  }

  getCurrentWeather(searchValue, units) {
    const API = `${this.URL}weather?q=${searchValue}&units=${units}&appid=${this.apiKey}`;
    return fetch(API).then(response => {
      if(response.ok) {
        return response.json();
      } else {
        Promise.reject(response.statusText);
      }
    });
  }

  getWeatherForecast(searchValue, units) {
    const API = `${this.URL}forecast?q=${searchValue}&units=${units}&appid=${this.apiKey}`;
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
