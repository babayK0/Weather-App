import Component from '../../framework/Component';
import videoSun from '../../../video/min_sun.mp4';
export default class VideoWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: 'video',
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
                value: videoSun,
              },
              {
                name: 'type',
                value: 'video/mp4',
              }
            ]
          }
        ]
      }
    ];
  }
}
