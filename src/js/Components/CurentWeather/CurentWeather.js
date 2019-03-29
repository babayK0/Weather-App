import Component from "../../framework/Component";
import { spawn } from "child_process";
export default class CurentWeather extends Component{
  constructor(host, props) {
    super(host, props);
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
                    value: this.props.src,
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
                content: this.props.weatherDescription,
              },
            ],
          },
          {
            tag: 'span',
            classList: ['extra-descr'],
            content: this.props.extraWeatherDescription,
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
            children: [
              {
                tag: 'span',
                classList: ['wind-info'],
                content: 9,//
              },
              {
                tag: 'span',
                classList: ['wind-unit'],
                content: ' km/h',//
              }
            ],
          },
          {
            tag: 'span',
            classList: ['humidity', 'subinfo-item'],
            children: [
              {
                tag: 'span',
                classList: ['humidity-info'],
                content: 18,
              },
              {
                tag: 'span',
                classList: ['humidity-unit'],
                content: ' %',
              }
            ],
          },
          {
            tag: 'span',
            classList: ['pressure', 'subinfo-item'],
            children: [
              {
                tag: 'span',
                classList: ['pressure-info'],
                content: 102,
              },
              {
                tag: 'span',
                classList: ['pressure-unit'],
                content: ' atm',
              }
            ],
          },
        ]
      },
    ];
  }
}
