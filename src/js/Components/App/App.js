import Component from '../../framework/Component';
import { Temperature } from '../Temperature';
import { SearchBar } from '../SearchBar';
import { WeatherForecast } from '../WeatherForecast';
import CurentWeather from '../CurentWeather/CurentWeather';

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    return [
      {
        tag: 'div',
        classList: ['searchbar-container'],
        children: [
          {
            tag: SearchBar,
            props: {
              attributes: [
                {
                  name: 'autocomplete',
                  value: 'off'
                }
              ]
            }
          }
        ]
      },
      {
        tag: 'div',
        classList: ['main-container'],
        children: [
          {
            tag: CurentWeather,
            props: {
              // src: ,
              // temperature: 
              weatherDescription: 'Rain',
              extraWeatherDescription: 'Small Rain'
            }
          }
        ]
      },
      {
        tag: 'div',
        classList: ['forecast-container'],
        children: [
          {
            tag: WeatherForecast,
            props: {
              // src: ,
            }
          }
        ]
      },
      {
        tag: 'div',
        classList: ['video-container']
      }
    ];
  }
}
