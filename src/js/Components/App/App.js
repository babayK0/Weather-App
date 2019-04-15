import Component from '../../framework/Component';
import { SearchBar } from '../SearchBar';
import { WeatherForecast } from '../WeatherForecast';
import { CurentWeather } from '../CurentWeather';
import { VideoWeather } from '../VideoWeather';

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  init() {}
  
  render() {
    return [
      {
        tag: SearchBar,
        containerTag: 'div',
      },
      {
        tag: CurentWeather,
        containerTag: 'div',
      },
      {
        tag: WeatherForecast,
        containerTag: 'div',
      },
      {
        tag: VideoWeather,
        containerTag: 'div'
      }
    ];
  }
}
