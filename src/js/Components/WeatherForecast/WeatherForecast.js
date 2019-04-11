import Component from '../../framework/Component';
import WeatherDataService from "../../Services/WeatherDataService.js";
import WeatherForecastItem from '../WeatherForecastItem/WeatherForecastItem';

import clearD from '../../../img/clearD.png';
import clearN from '../../../img/clearN.png';
import cloudyD from '../../../img/cloudyD.png';
import cloudyN from '../../../img/cloudyN.png';
import cloudy from '../../../img/cloudy.png';
import rainD from '../../../img/rainD.png';
import rainN from '../../../img/rainN.png';
import showerD from '../../../img/showerD.png';
import showerN from '../../../img/showerN.png';
import snowD from '../../../img/snowD.png';
import snowN from '../../../img/snowN.png';
import thunderstorm from '../../../img/thunderstorm.png';
import fog from '../../../img/fog.png';
export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: 'ul',
        classList: ['forecast-list'],
        children: [
          {
            tag: WeatherForecastItem,
            containerTag: 'li',
            props: {
              // data: this.props.fiveDayData.list[4],
              src: clearD,
              temperature: 7,
              units: 'C',
            },
          },
          {
            tag: WeatherForecastItem,
            containerTag: 'li',
            props: {
              // data: this.props.fiveDayData.list[4],
              src: clearD,
              temperature: 7,
              units: 'C',
            },
          },
          {
            tag: WeatherForecastItem,
            containerTag: 'li',
            props: {
              // data: this.props.fiveDayData.list[4],//
              src: clearD, /*******/
              temperature: 7, /***********/
              units: 'C',
            },
          },
          {
            tag: WeatherForecastItem,
            containerTag: 'li',
            props: {
              // data: this.props.fiveDayData.list[4],//
              src: clearD,
              temperature: 7,
              units: 'C',
            },
          },
          {
            tag: WeatherForecastItem,
            containerTag: 'li',
            props: {
              // data: this.props.fiveDayData.list[4],//
              src: clearD,
              temperature: 7,
              units: 'C',
            },
          },
        ],
      }
    ];
  }
}
