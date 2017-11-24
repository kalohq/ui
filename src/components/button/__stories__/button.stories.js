import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from 'components/button';

const myClickFunction = () => {
  /* eslint-disable no-alert */
  window.alert('Hello from an onClick event');
  /* eslint-enable no-alert */
};

storiesOf('Button', module)
  .addWithInfo(
    'Default Button',
    "The default style. Unless the action you're building is primary, this is the button you should use.",
    () => {
      return <Button>Export Freelancers</Button>;
    }
  )
  .addWithInfo(
    'Primary Button',
    'The primary action of a view. It should be used no more than once per view.',
    () => {
      return <Button theme="primary">Create Project</Button>;
    }
  )
  .addWithInfo(
    'Delete Button',
    'An action button for deleting/removing',
    () => {
      return <Button theme="delete">Remove freelancer</Button>;
    }
  )
  .addWithInfo(
    'disabled state',
    'Buttons can be disabled by toggling the disabled state. This will prevent any user interaction with the button (onClick will also be disabled)',
    () => {
      return (
        <Button theme="tertiary" disabled={true} onClick={myClickFunction}>
          Get Started
        </Button>
      );
    }
  )
  .addWithInfo(
    'disabled and success state',
    'Sometimes you want to trigger the success animation while keeping the button disabled/unclickable',
    () => {
      return (
        <Button disabled={true} success={true} onClick={myClickFunction}>
          Get Started
        </Button>
      );
    }
  )
  .addWithInfo('Secondary Button', 'Used for supporting actions.', () => {
    return <Button theme="secondary">Save Changes</Button>;
  })
  .addWithInfo(
    'With icon',
    'To provide more context to an action, an icon (see the Icon component) can be floated next the button copy',
    () => {
      return <Button icon="file_download">Generate Invoice</Button>;
    }
  )
  .addWithInfo('with loading state', 'A button in a loading state', () => {
    return <Button loading={true}>Generate Invoice</Button>;
  })
  .addWithInfo(
    'with success state',
    'A button with a callback success state',
    () => {
      return <ButtonStates>Click me to change to a success state</ButtonStates>;
    }
  )
  .addWithInfo(
    'With lone icon',
    'A button can also be used with a standalone icon',
    () => {
      return <Button size="medium" icon="mode_edit" loneIcon={true} />;
    }
  );

class ButtonStates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonState: false,
      buttonLoading: false,
      buttonCallbackMessage: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.__demoTimeout__);
  }

  handleClick() {
    this.setState({
      buttonLoading: true,
    });

    clearTimeout(this.__demoTimeout__);
    this.__demoTimeout__ = setTimeout(() => {
      this.setState({
        buttonState: 'success',
        buttonLoading: true,
        buttonCallbackMessage: "You're logged in!",
      });

      setTimeout(() => {
        this.setState({
          buttonState: false,
          buttonLoading: false,
          buttonCallbackMessage: false,
        });
      }, 3000);
    }, 2000);
  }

  render() {
    return (
      <Button
        theme="secondary"
        state={this.state.buttonState}
        loading={this.state.buttonLoading}
        onClick={this.handleClick}
        callbackMessage={this.state.buttonCallbackMessage}
      >
        Click me
      </Button>
    );
  }
}
