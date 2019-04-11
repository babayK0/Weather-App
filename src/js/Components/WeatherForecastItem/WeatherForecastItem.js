import Component from '../../framework/Component';
export default class WeatherForecastItem extends Component {
  constructor(host, props) {
    super(host, props);
  }

  shortenedDayOfWeek(day) {
    /*make day of week from dt_txt */

    // day = this.props.data.dt_txt;
    day = '2019-03-26 12:00:00';
    let date = new Date(day);
    let dateArray = date.toString().split(' ');
    let dayOfWeek = dateArray[0];
    return dayOfWeek;
  }

  render() {
    return [
      {
        tag: 'span',
        classList: ['forecast-day'],
        content: this.shortenedDayOfWeek()
      },
      {
        tag: 'div',
        classList: ['forecast-img-wrapper'],
        children: [
          {
            tag: 'img',
            attributes: [
              {
                name: 'alt',
                value: 'weather image'
              },
              {
                name: 'src',
                value: this.props.src
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
        tag: 'span',
        classList: ['forecast-temp'],
        content: Math.round(this.props.temperature) + `&deg;` + this.props.units
      }
    ];
  }
}
