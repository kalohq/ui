import React from 'react';

import Button from '../';
import ButtonGroup from '../../button-group';
import {ThemeProvider} from 'emotion-theming';

const myClickFunction = () => {
  /* eslint-disable no-alert */
  window.alert('Hello from an onClick event');
  /* eslint-enable no-alert */
};

class DemoButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      success: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      loading: true,
    });

    setTimeout(
      () =>
        this.setState({
          loading: false,
          success: true,
        }),
      2000
    );
  }

  render() {
    return React.cloneElement(this.props.children, {
      loading: this.state.loading,
      success: this.state.success,
      onClick: this.handleClick,
    });
  }
}

export const examples = [
  {
    title: 'Tertiary Button',
    description:
      "The default style. Unless the action you're building is primary, this is the button you should use",
    render: () => <Button variant="tertiary">Export Freelancers</Button>,
    html: () => (
      <button className="ui-btn ui-btn--tertiary ui-btn--medium">
        Tertiary Button
      </button>
    ),
  },
  {
    title: 'Primary Button',
    description:
      'The primary action of a view. It should be used no more than once per view.',
    render: () => <Button variant="primary">Create Project</Button>,
    html: () => (
      <button className="ui-btn ui-btn--primary ui-btn--medium">
        Primary button
      </button>
    ),
  },
  {
    title: 'Secondary Button',
    description: 'Used for supporting actions.',
    render: () => <Button variant="secondary">Save Changes</Button>,
    html: () => (
      <button className="ui-btn ui-btn--secondary ui-btn--medium">
        Secondary button
      </button>
    ),
  },
  {
    title: 'Flare Button',
    description: 'Used for marketing, and flows in to the app',
    render: () => <Button variant="flare">Create Account</Button>,
    html: () => (
      <button className="ui-btn ui-btn--flare ui-btn--medium">
        Create Account
      </button>
    ),
  },
  {
    title: 'Delete Button',
    description: 'An action button for deleting/removing.',
    render: () => <Button variant="delete">Remove freelancer</Button>,
    html: () => (
      <button className="ui-btn ui-btn--delete ui-btn--medium">
        Delete button
      </button>
    ),
  },
  {
    title: 'Action Button',
    description:
      'A primary button used for actions - Only ever used once per view',
    render: () => (
      <Button variant="action" icon="add" loneIcon={true} size="extra-large" />
    ),
  },
  {
    title: 'Disabled Button',
    description:
      'Buttons can be disabled by toggling the disabled state. This will prevent any user interaction with the button (onClick will also be disabled).',
    render: () => (
      <Button variant="tertiary" disabled={true} onClick={myClickFunction}>
        Get Started
      </Button>
    ),
    html: () => (
      <button className="ui-btn ui-btn--primary ui-btn--medium" disabled={true}>
        Disabled button
      </button>
    ),
  },
  {
    title: 'DisabledSuccessButton',
    description:
      'Sometimes you want to trigger the success animation while keeping the button disabled/unclickable.',
    render: () => (
      <Button
        variant="tertiary"
        disabled={true}
        success={true}
        onClick={myClickFunction}
      >
        Get Started
      </Button>
    ),
  },
  {
    title: 'Loading button',
    description: 'A button in a loading state',
    render: () => <Button loading={true}>Loading Button</Button>,
    html: () => (
      <button
        className="ui-btn ui-btn--primary ui-btn--large ui-btn--loading"
        disabled={true}
      >
        Loading Button
      </button>
    ),
  },
  {
    title: 'Loading button with success',
    description:
      'Buttons can have callback states that display a message on success',
    render: () => (
      <DemoButton>
        <Button variant="primary" message="Yey it worked!" loadedTimeout={2000}>
          Click me to see the demo
        </Button>
      </DemoButton>
    ),
  },
  {
    title: 'Button with icon',
    description:
      'To provide more context to an action, an icon (see the Icon component) can be floated next the button copy.',
    render: () => (
      <Button variant="tertiary" icon="mode_edit">
        Generate invoice
      </Button>
    ),
    html: () => (
      <button className="ui-btn ui-btn--large ui-btn--tertiary">
        <svg width="18" height="18" aria-hidden="true">
          <use xlinkHref="#mode_edit" />
        </svg>
        Generate invoice
      </button>
    ),
  },
  {
    title: 'Button with lone icon',
    description: 'A button can also be used with a standalone icon',
    render: () => (
      <Button
        variant="tertiary"
        size="medium"
        icon="mode_edit"
        loneIcon={true}
      />
    ),
    html: () => (
      <button className="ui-btn ui-btn--large ui-btn--tertiary ui-btn--lone-icon">
        <svg width="18" height="18" aria-hidden="true">
          <use xlinkHref="#mode_edit" />
        </svg>
      </button>
    ),
  },
  {
    title: 'Sizing',
    description:
      'Buttons come in three different sizes: small, medium, and large',
    render: () => (
      <ButtonGroup spacing={true}>
        <Button variant="tertiary" size="small">
          Small
        </Button>
        <Button variant="tertiary" size="medium">
          Medium
        </Button>
        <Button variant="tertiary" size="large">
          Large
        </Button>
      </ButtonGroup>
    ),
    html: () => (
      <div className="ui-btn-group">
        <button className="ui-btn ui-btn--tertiary ui-btn--small">Small</button>
        <button className="ui-btn ui-btn--tertiary ui-btn--medium">
          medium
        </button>
        <button className="ui-btn ui-btn--tertiary ui-btn--large">large</button>
      </div>
    ),
  },
  {
    title: 'Button Link',
    render: () => (
      <Button component="a" variant="tertiary">
        Link button
      </Button>
    ),
    html: () => (
      <a href="#" className="ui-btn ui-btn--tertiary ui-btn--medium">
        Link button
      </a>
    ),
  },
  {
    title: 'Themed button',
    description:
      'When used in the platform, primary buttons can inherit their colors from the theme (React only)',
    render: () => (
      <ThemeProvider
        theme={{
          user: {
            primary: '#4885ed',
          },
        }}
      >
        <Button variant="primary" size="large">
          A themed button
        </Button>
      </ThemeProvider>
    ),
  },
];
