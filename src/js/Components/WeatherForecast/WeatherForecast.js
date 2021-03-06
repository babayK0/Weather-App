import Component from '../../framework/Component';
import AppState from '../../Services/AppState';
import WeatherDataService from '../../Services/WeatherDataService.js';
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
  switch (weatherID) {
    case '01d':
      return clearD;
    case '01n':
      return clearN;
    case '02d':
      return cloudyD;
    case '02n':
      return cloudyN;
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return cloudy;
    case '09d':
    case '09n':
      return rain;
    case '10d':
      return rainD;
    case '10n':
      return rainN;
    case '11d':
    case '11n':
      return thunderstorm;
    case '13d':
      return snowD;
    case '13n':
      return snowN;
    case '50d':
    case '50n':
      return fog;
    default:
      break;
  }
};

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch('USERINPUT', this.updateMyself);
    AppState.watch('SHOWCITY', this.updateMyself);
    AppState.watch('UNITS', this.changeUnits);
  }

  init() {
    ['updateMyself', 'changeUnits'].forEach(
      methodName => (this[methodName] = this[methodName].bind(this))
    );
    this.forecastWeather = null;
    this.state = {
      city: null,
      units: localStorage.getItem('units')
        ? localStorage.getItem('units')
        : 'metric'
    };
  }

  updateMyself(searchValue) {
    WeatherDataService.getWeatherForecast(searchValue, this.state.units).then(
      result => {
        this.forecastWeather = result;
        this.state.city = this.forecastWeather.city.name;
        this.updateState(this.forecastWeather);
      }
    );
  }

  changeUnits(newUnits) {
    WeatherDataService.getWeatherForecast(newUnits.city, newUnits.units).then(
      result => {
        this.forecastWeather = result;
        this.state.city = this.forecastWeather.city.name;
        this.updateState(newUnits);
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
                  dayOfWeek: this.forecastWeather.list[4].dt,
                  src: `${chooseIcon(
                    this.forecastWeather.list[4].weather[0].icon
                  )}`,
                  temperature: this.forecastWeather.list[4].main.temp
                }
              },
              {
                tag: WeatherForecastItem,
                containerTag: 'li',
                props: {
                  dayOfWeek: this.forecastWeather.list[12].dt,
                  src: `${chooseIcon(
                    this.forecastWeather.list[12].weather[0].icon
                  )}`,
                  temperature: this.forecastWeather.list[12].main.temp
                }
              },
              {
                tag: WeatherForecastItem,
                containerTag: 'li',
                props: {
                  dayOfWeek: this.forecastWeather.list[20].dt,
                  src: `${chooseIcon(
                    this.forecastWeather.list[20].weather[0].icon
                  )}`,
                  temperature: this.forecastWeather.list[20].main.temp
                }
              },
              {
                tag: WeatherForecastItem,
                containerTag: 'li',
                props: {
                  dayOfWeek: this.forecastWeather.list[28].dt,
                  src: `${chooseIcon(
                    this.forecastWeather.list[28].weather[0].icon
                  )}`,
                  temperature: this.forecastWeather.list[28].main.temp
                }
              },
              {
                tag: WeatherForecastItem,
                containerTag: 'li',
                props: {
                  dayOfWeek: this.forecastWeather.list[36].dt,
                  src: `${chooseIcon(
                    this.forecastWeather.list[36].weather[0].icon
                  )}`,
                  temperature: this.forecastWeather.list[36].main.temp
                }
              }
            ]
          }
        ]
      : '';
  }
}
