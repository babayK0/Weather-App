import Component from '../../framework/Component';
import { History } from '../../Components/History';
import { Favorites } from '../../Components/Favorites';
import AppState from '../../Services/AppState';
export default class WeatherLists extends Component {
  constructor(host, props) {
    super(host, props);
    // AppState.watch("USERINPUT", this.updateMyself);
  }

  init() {}

  render() {
    return [
      {
        tag: 'div',
        classList: ['weather-list'],
        children: 
        [
          {
            tag: 'h3',
            classList: ['list-title'],
            content: 'Search History'
          },
          {
            tag: History,
          }
        ],
      },
      {
        tag: 'div',
        classList: ['weather-list'],
        children: 
        [
          {
            tag: 'h3',
            classList: ['list-title'],
            content: 'Favorites'
          },
          {
            tag: Favorites,
          }
        ],
      }
    ];
  }
}
