import Component from '../../framework/Component';
import AppState from '../../Services/AppState';
import WeatherDataService from "../../Services/WeatherDataService.js";
import WeatherForecastItem from '../WeatherForecastItem/WeatherForecastItem';

import clearD from '../../../img/clearD.png';
import clearN from '../../../img/clearN.png';
import cloudyD from '../../../img/cloudyD.png';
import cloudyN from '../../../img/cloudyN.png';
import cloudy from '../../../img/cloudy.png';
import rainD from '../../../img/rainD.png';
import rainN from '../../../img/rainN.png';
import rain from '../../../img/rain.png';
import snowD from '../../../img/snowD.png';
import snowN from '../../../img/snowN.png';
import thunderstorm from '../../../img/thunderstorm.png';
import fog from '../../../img/fog.png';

const chooseIcon = weatherID => {
  if (weatherID === '01d') return clearD;
  if (weatherID === '01n') return clearN;
  if (weatherID === '02d') return cloudyD;
  if (weatherID === '02n') return cloudyN;
  if (
    weatherID === '03d' ||
    weatherID === '03n' ||
    weatherID === '04d' ||
    weatherID === '04n'
  )
    return cloudy;
  if (weatherID === '09d' || weatherID === '09n') return rain;
  if (weatherID === '10d') return rainD;
  if (weatherID === '10n') return rainN;
  if (weatherID === '11d' || weatherID === '11n') return thunderstorm;
  if (weatherID === '13d') return snowD;
  if (weatherID === '13n') return snowN;
  if (weatherID === '50d' || weatherID === '50n') return fog;
};

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch('USERINPUT', this.updateMyself);
    WeatherDataService.getWeatherForecast('Kyiv', 'metric').then(
      result =>console.log(result))
  }

  init() {
    ['updateMyself'].forEach(
      methodName => (this[methodName] = this[methodName].bind(this))
    );
    this.forecastWeather = null;
    this.state = {
      units: 'metric',
      unit: 'C',
      day: null,
    };
  }

  updateMyself(searchValue) {
    console.log(`forecast weather at ${searchValue}`);
    WeatherDataService.getWeatherForecast(searchValue, this.state.units).then(
      result => {
        this.forecastWeather = result;
        console.log(this.forecastWeather);//
        // this.state.ID = this.forecastWeather.sys.sunrise;
        this.updateState(this.forecastWeather);
      }
    );
  }

  render() {
    return this.forecastWeather !== null
    ? [
      {
        tag: 'ul',
        classList: ['forecast-list'],
        children: [
          {
            tag: WeatherForecastItem,
            containerTag: 'li',
            props: {
              dayOfWeek: this.forecastWeather.list[4].dt_txt,
              src: `${chooseIcon(this.forecastWeather.list[4].weather[0].icon)}`,
              temperature: this.forecastWeather.list[4].main.temp,
              units: this.state.unit,
            },
          },
          {
            tag: WeatherForecastItem,
            containerTag: 'li',
            props: {
              dayOfWeek: this.forecastWeather.list[12].dt_txt,
              src: `${chooseIcon(this.forecastWeather.list[12].weather[0].icon)}`,
              temperature: this.forecastWeather.list[12].main.temp,
              units: this.state.unit,
            },
          },
          {
            tag: WeatherForecastItem,
            containerTag: 'li',
            props: {
              dayOfWeek: this.forecastWeather.list[20].dt_txt,
              src: `${chooseIcon(this.forecastWeather.list[20].weather[0].icon)}`,
              temperature: this.forecastWeather.list[20].main.temp,
              units: this.state.unit,
            },
          },
          {
            tag: WeatherForecastItem,
            containerTag: 'li',
            props: {
              dayOfWeek: this.forecastWeather.list[28].dt_txt,
              src: `${chooseIcon(this.forecastWeather.list[28].weather[0].icon)}`,
              temperature: this.forecastWeather.list[28].main.temp,
              units: this.state.unit,
            },
          },
          {
            tag: WeatherForecastItem,
            containerTag: 'li',
            props: {
              dayOfWeek: this.forecastWeather.list[36].dt_txt,
              src: `${chooseIcon(this.forecastWeather.list[36].weather[0].icon)}`,
              temperature: this.forecastWeather.list[36].main.temp,
              units: this.state.unit,
            },
          },
        ],
      }
    ] : '';
  }
}
