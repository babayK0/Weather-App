import Component from '../../framework/Component';
import AppState from '../../Services/AppState';
import WeatherDataService from '../../Services/WeatherDataService.js';
import DateConvertor from '../../Services/DateConvertor.js';

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

export default class CurentWeather extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch('USERINPUT', this.updateMyself);
  }

  init() {
    ['updateMyself'].forEach(
      methodName => (this[methodName] = this[methodName].bind(this))
    );
    this.curentWeather = null;
    this.forecastWeather = null;
    this.state = {
      city: null,
      country: null,
      units: 'metric',
      day: null,
      ID: null
    };
  }

  updateMyself(searchValue) {
    console.log(`curent weather at ${searchValue}`);
    WeatherDataService.getCurrentWeather(searchValue, this.state.units).then(
      result => {
        this.curentWeather = result;
        console.log(this.curentWeather);//
        this.state.city = this.curentWeather.name;
        this.state.country = this.curentWeather.sys.country;
        this.state.day = this.curentWeather.sys.sunrise;
        this.state.ID = this.curentWeather.weather[0].icon;
        this.updateState(this.curentWeather);
      }
    );
  }

  render() {
    return this.curentWeather !== null
      ? [
          {
            tag: 'div',
            classList: ['weather-maininfo'],
            children: [
              {
                tag: 'span',
                classList: ['city', 'maininfo-item'],
                children: [
                  {
                    tag: 'label',
                    classList: ['favorite'],
                    attributes: [
                      {
                        name: 'title',
                        value: 'Like this !'
                      }
                    ],
                    children: [
                      {
                        tag: 'input',
                        classList: ['checkbox-favorite', 'checkbox'],
                        attributes: [
                          {
                            name: 'type',
                            value: 'checkbox'
                          }
                        ]
                      },
                      {
                        tag: 'span',
                        classList: ['like']
                      }
                    ]
                  },
                  {
                    tag: 'span',
                    classList: ['city-name'],
                    content: `${this.state.city}, ${this.state.country}`
                  },
                  {
                    tag: 'label',
                    classList: ['swap'],
                    attributes: [
                      {
                        name: 'title',
                        value: 'Change units'
                      }
                    ],
                    children: [
                      {
                        tag: 'input',
                        classList: ['checkbox-units', 'checkbox'],
                        attributes: [
                          {
                            name: 'type',
                            value: 'checkbox'
                          }
                        ]
                      },
                      {
                        tag: 'div',
                        classList: ['units']
                      }
                    ]
                  }
                ]
              },
              {
                tag: 'div',
                classList: ['image-wrapper', 'maininfo-item'],
                children: [
                  {
                    tag: 'img',
                    attributes: [
                      {
                        name: 'alt',
                        value: `${this.curentWeather.weather[0].main}`
                      },
                      {
                        name: 'src',
                        value: `${chooseIcon(
                          this.state.ID
                        )}`
                      },
                      {
                        name: 'draggable',
                        value: false
                      }
                    ]
                  }
                ]
              },
              {
                tag: 'div',
                classList: ['main-weather', 'maininfo-item'],
                children: [
                  {
                    tag: 'span',
                    classList: ['temperature-info'],
                    content: Math.round(this.curentWeather.main.temp) + `&deg;`
                  },
                  {
                    tag: 'span',
                    classList: ['weather-descr'],
                    content: this.curentWeather.weather[0].main
                  }
                ]
              },
              {
                tag: 'span',
                classList: ['extra-descr'],
                content: this.curentWeather.weather[0].description
              }
            ]
          },
          {
            tag: 'div',
            classList: ['weather-subinfo'],
            children: [
              {
                tag: 'span',
                classList: ['day', 'subinfo-item'],
                content: DateConvertor.convertTime(this.state.day, true)
              },
              {
                tag: 'span',
                classList: ['date', 'subinfo-item'],
                content: DateConvertor.convertTime(this.state.day)
              },
              {
                tag: 'span',
                classList: ['wind', 'subinfo-item'],
                content:
                  `Wind: ` + Math.round(this.curentWeather.wind.speed) + ` km/h`
              },
              {
                tag: 'span',
                classList: ['humidity', 'subinfo-item'],
                content:
                  `Humidity:   ` +
                  Math.round(this.curentWeather.main.humidity) +
                  ` %`
              },
              {
                tag: 'span',
                classList: ['pressure', 'subinfo-item'],
                content:
                  `Pressure: ` +
                  Math.round(this.curentWeather.main.pressure) +
                  ` atm`
              }
            ]
          }
        ]
      : [
          {
            tag: 'h2',
            classList: ['typewriter'],
            content: 'Type your city and press search  =)'
          }
        ];
  }
}
