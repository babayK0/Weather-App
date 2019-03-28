import Component from '../../framework/Component';
import { Temperature } from '../Temperature';
import { SearchBar } from '../SearchBar';
import { WeatherForecast } from '../WeatherForecast';

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
        classList: ['main-container']
      },
      {
        tag: 'div',
        classList: ['forecast-container'],
        children: [
          {
            tag: WeatherForecast,
            props: {
              unit: 'a',
            },
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
