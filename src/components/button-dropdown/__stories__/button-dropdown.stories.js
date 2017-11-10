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

export class ExampleButton extends React.Component {
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
      <ButtonDropdown
        onClick={this.toggle}
        open={this.state.open}
        onRequestClose={this.toggle}
        size={this.props.size}
        selectItems={this.props.selectItems}
        checkboxProps={this.props.checkboxProps}
      >
        {this.props.children}
      </ButtonDropdown>
    );
  }
}

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
          <ExampleButton
            checkboxProps={{
              onClick: () => {},
            }}
            selectItems={[
              {
                title: 'Pending',
                onClick: myClickFunction,
              },
              {
                title: 'Approved',
                onClick: myClickFunction,
              },
            ]}
          >
            Bulk Select Options
          </ExampleButton>
          <ExampleButton
            selectItems={[
              {
                title: 'All',
                onClick: myClickFunction,
              },
              {
                title: 'Pending',
                onClick: myClickFunction,
              },
              {
                title: 'Approved',
                onClick: myClickFunction,
              },
            ]}
          >
            Bulk Select Options
          </ExampleButton>
          <ExampleButton
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
            Another
          </ExampleButton>
          <ExampleButton
            selectItems={[
              {
                title: 'An item with quite a long name',
                onClick: myClickFunction,
              },
              {
                title: 'Export',
                onClick: myClickFunction,
              },
            ]}
          >
            1
          </ExampleButton>
        </ButtonGroup>
      </Box>
    );
  }
}
