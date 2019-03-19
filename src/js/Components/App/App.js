import Component from '../../framework/Component';
import { Temperature } from '../Temperature';

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    return [
      'Temperature range',
      {
        tag: Temperature,
        props: {
          temperature: 7,
          unit: 'C'
        }
      }
    ];
  }
  
}
