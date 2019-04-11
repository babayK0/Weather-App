import Component from "../../framework/Component";
import WeatherDataService from "../../Services/WeatherDataService.js";
export default class CurentWeather extends Component{
  constructor(host, props) {
    super(host, props);
    WeatherDataService.getCurrentWeather().then(result => console.log(result));
  }

  convertTime(UNIX_timestamp,day) {
    let dt = new Date(UNIX_timestamp * 1000);
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek = daysOfWeek[newDate.getDay()];
    let year = dt.getFullYear();
    let month = (`0${dt.getMonth()+1}`).slice(-2);
    let date = (`0${dt.getDate()}`).slice(-2);
    let time = `${date}.${month}.${year}`;
    if(day) return dayOfWeek;
    else return time;
  }

  render(){
    return [
      {
        tag:'div',
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
                    value: 'Like this !',
                  },
                ],
                children:[
                  {
                    tag: 'input',
                    classList: ['checkbox-favorite', 'checkbox'],
                    attributes: [
                      {
                        name: 'type',
                        value: 'checkbox',
                      },
                    ],
                  },
                  {
                    tag: 'span',
                    classList: ['like'],
                  },
                ],
              },
              {
                tag: 'span',
                classList: ['city-name'],
                content: 'Kyiv',//
              },
              {
                tag: 'label',
                classList: ['swap'],
                attributes: [
                  {
                    name: 'title',
                    value: 'Change units',
                  },
                ],
                children:[
                  {
                    tag: 'input',
                    classList: ['checkbox-units', 'checkbox'],
                    attributes: [
                      {
                        name: 'type',
                        value: 'checkbox',
                      },
                    ],
                  },
                  {
                    tag: 'div',
                    classList: ['units'],
                  },
                ],
              },
            ],
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
                    value: 'weather image',
                  },
                  {
                    name: 'src',
                    // value: src
                  },
                  {
                    name: 'draggable',
                    value: false,
                  },
                ],
              },
            ],
          },
          {
            tag: 'div',
            classList:['main-weather', 'maininfo-item'],
            children:[
              {
                tag: 'span',
                classList: ['temperature-info'],
                content:
                  Math.round(this.props.temperature) + `&deg;`,
              },
              {
                tag: 'span',
                classList: ['weather-descr'],
                content: 'Rain',//
              },
            ],
          },
          {
            tag: 'span',
            classList: ['extra-descr'],
            content: 'Small Rain',//
          },
        ]
      },
      {
        tag:'div',
        classList: ['weather-subinfo'],
        children: [
          {
            tag: 'span',
            classList: ['day', 'subinfo-item'],
            content: 'Monday'//
          },
          {
            tag: 'span',
            classList: ['date', 'subinfo-item'],
            content: '02.03.2019'//
          },
          {
            tag: 'span',
            classList: ['wind', 'subinfo-item'],
            content: Math.round(this.props.wind) + ` km/h`,
          },
          {
            tag: 'span',
            classList: ['humidity', 'subinfo-item'],
            content: Math.round(this.props.wind) + ` %`,
          },
          {
            tag: 'span',
            classList: ['pressure', 'subinfo-item'],
            content: Math.round(this.props.wind) + ` atm`,
          },
        ]
      },
    ];
  }
}
