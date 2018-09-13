import * as React from 'react';

import Select, {Option} from '../';

const COUNTRIES = [
  {name: 'Afghanistan'},
  {name: 'Åland Islands'},
  {name: 'Albania'},
  {name: 'Algeria'},
  {name: 'American Samoa'},
  {name: 'AndorrA'},
  {name: 'Angola'},
  {name: 'Anguilla'},
  {name: 'Antarctica'},
  {name: 'Antigua and Barbuda'},
  {name: 'Argentina'},
];

class SelectDemo extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: 'Yemen',
    };

    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(newValue) {
    this.setState({selection: newValue});
  }

  render() {
    return (
      <Select
        placeholder="Select your country"
        onSelect={this.onSelectChange}
        selection={this.state.selection}
      >
        {COUNTRIES.map(country => (
          <Option key={country.name} value={country.name}>
            {country.name}
          </Option>
        ))}
      </Select>
    );
  }
}
export const examples = [
  {
    title: 'Select',
    description: 'A standard Select',
    render: () => <SelectDemo />,
    html: () => (
      <select className="ui-select">
        {COUNTRIES.map(country => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    ),
  },
  {
    title: 'Disabled select',
    description: 'Select inputs can also be disabled',
    render: () => (
      <Select
        placeholder="Select your country"
        onSelect={() => {}}
        disabled={true}
      >
        {COUNTRIES.map(country => (
          <Option key={country.name}>{country.name}</Option>
        ))}
      </Select>
    ),
    html: () => (
      <select className="ui-select" disabled={true}>
        {COUNTRIES.map(country => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    ),
  },
  {
    title: 'Readonly select',
    description:
      'Readonly selects are useful for displaying a value, but disabling user interaction',
    render: () => (
      <Select
        placeholder="Select your country"
        onSelect={() => {}}
        selection="Zambia"
        readonly={true}
      >
        {COUNTRIES.map(country => (
          <Option key={country.name}>{country.name}</Option>
        ))}
      </Select>
    ),
  },
];
