import React from 'react';
import {storiesOf} from '@storybook/react';

import ButtonDropdown from 'components/button-dropdown';
import ButtonGroup from 'components/button-group';
import {Box} from 'components/layout';

const myClickFunction = () => {
  /* eslint-disable no-alert */
  window.alert('Hello from an onClick event');
  /* eslint-enable no-alert */
};

storiesOf(
  'ButtonDropdown',
  module
).addWithInfo(
  'ButtonDropdown',
  'A button like component with an integrated dropdown',
  () => {
    return <Example />;
  }
);

export class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false,
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <Box padding={48} style={{backgroundColor: 'var(--navy300)'}}>
        <ButtonGroup>
          <ButtonDropdown
            onClick={this.toggle}
            open={this.state.open}
            size="medium"
            selectItems={[
              {
                title: 'Approve invoice',
                onClick: myClickFunction,
              },
              {
                title: 'Export',
                onClick: myClickFunction,
              },
            ]}
          >
            Bulk Actions
          </ButtonDropdown>
          <ButtonDropdown
            onClick={this.toggle}
            open={this.state.open}
            size="medium"
            selectItems={[
              {
                title: 'Approve invoice',
                onClick: myClickFunction,
              },
            ]}
          >
            4 Selected
          </ButtonDropdown>
        </ButtonGroup>
      </Box>
    );
  }
}
