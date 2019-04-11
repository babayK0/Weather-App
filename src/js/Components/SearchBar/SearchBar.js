import Component from '../../framework/Component';
export default class SearchBar extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: 'form',
        classList: ['search-form'],
        attributes: this.props.attributes,
        children: [
          {
            tag: 'input',
            classList: ['searchbar'],
            attributes: [
              {
                name: 'type',
                value: 'text',
              },
              {
                name: 'name',
                value: 'city',
              },
              {
                name: 'inputmode',
                value: 'verbatim',
              },
              {
                name: 'placeholder',
                value: 'Enter city name',
              },
              {
                name: 'title',
                value: 'Type city name',
              },
              {
                name: 'autocomplete',
                value: 'off'
              },
              {
                name: 'required',
              }
            ]
          },
          {
            tag: 'button',
            classList: ['search-button'],
            attributes: [
              {
                name: 'title',
                value: "What's the weather today?",
              }
            ],
            
          },
        ]
      }
    ];
  }
}
