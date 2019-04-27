import Component from '../../framework/Component';
import AppState from '../../Services/AppState';
import WeatherDataService from '../../Services/WeatherDataService.js';

import videoClear from '../../../video/min_sun.mp4';
import videoClouds from '../../../video/min_clouds.mp4';
import videoRain from '../../../video/min_rain.mp4';
import videoSnow from '../../../video/min_snow.mp4';
import videoThunderstorm from '../../../video/min_thunderstorm.mp4';
import videoFog from '../../../video/Fog.mp4';

const chooseVideo = weatherID => {
  switch (weatherID) {
    case '01d':
    case '01n':
      return videoClear;
    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return videoClouds;
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      return videoRain;
    case '11d':
    case '11n':
      return videoThunderstorm;
    case '13d':
    case '13n':
      return videoSnow;
    case '50d':
    case '50n':
      return videoFog;
    default:
      break;
  }
};
export default class VideoWeather extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch('USERINPUT', this.updateMyself);
    AppState.watch('SHOWCITY', this.updateMyself);
  }

  init() {
    ['updateMyself'].forEach(
      methodName => (this[methodName] = this[methodName].bind(this))
    );
    this.state = {
      units: 'metric',
      ID: "01d"
    };
  }

  updateMyself(searchValue) {
    WeatherDataService.getCurrentWeather(searchValue, this.state.units).then(
      result => {
        this.curentWeather = result;
        this.state.ID = this.curentWeather.weather[0].icon;
        this.updateState(this.curentWeather);
      }
    );
  }

  render() {
    return [
      {
        tag: 'video',
        classList: ['video'],
        attributes: [
          {
            name: 'id',
            value: 'weatherVideo'
          },
          {
            name: 'autoplay',
            value: 'autoplay'
          },
          {
            name: 'muted',
            value: 'muted'
          },
          {
            name: 'loop',
            value: 'loop'
          }
        ],
        content: 'Your browser does not support HTML5 video.',
        children: [
          {
            tag: 'source',
            attributes: [
              {
                name: 'src',
                value: `${chooseVideo(
                  this.state.ID
                )}`
              },
              {
                name: 'type',
                value: 'video/mp4'
              }
            ]
          }
        ]
      }
    ];
  }
}
