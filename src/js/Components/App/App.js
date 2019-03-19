import Component from "../../framework/Component";
import {Temperature} from '../Temperature';

export default class App extends Component{
  constructor(host) {
    super(host);
  }

  render() {
    const  temp = document.createElement('div');
    new Temperature(temp, {temperature: 5, unit: 'C',});
    
    return ['hi', temp];
  }
}
