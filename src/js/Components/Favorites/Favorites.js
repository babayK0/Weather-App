import Component from '../../framework/Component';
import AppState from '../../Services/AppState';
import WeatherDataService from '../../Services/WeatherDataService.js';
import DateConvertor from '../../Services/DateConvertor.js';

export default class Favorites extends Component {
  constructor(host, props) {
    super(host, props);
    // AppState.watch('USERINPUT', this.updateMyself);
  }

  init() {
    ['updateMyself'].forEach(
      methodName => (this[methodName] = this[methodName].bind(this))
    );
  }

  updateMyself(searchValue) {}

  render() {
    return 'favorites';
  }
}
