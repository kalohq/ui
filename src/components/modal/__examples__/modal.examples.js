import React from 'react';

import Modal from '../modal';
import Button from '../../button';
import ButtonGroup from '../../button-group';
import Text from '../../text';

class DemoModal extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleOpen}>Open Modal</Button>
        {React.cloneElement(this.props.children[0], {
          open: this.state.open,
          onClose: this.toggleOpen,
        })}
      </div>
    );
  }
}

const toggleHtmlModal = ev =>
  ev.target
    .closest('#demo-container')
    .querySelector('.ui-modal')
    .classList.toggle('ui-modal--open');

export const examples = [
  {
    title: 'Standard Modal',
    render: () => (
      <DemoModal>
        <Modal
          title="Create Project"
          actions={
            <ButtonGroup spacing={true} align="right">
              <Button size="medium" variant="tertiary">
                Cancel
              </Button>
              <Button size="medium" variant="primary">
                Create Project
              </Button>
            </ButtonGroup>
          }
        >
          <Text multiline={true}>
            An American monkey, after getting drunk on brandy, would never touch
            it again, and thus is much wiser than most men.
          </Text>
        </Modal>,
      </DemoModal>
    ),
    html: () => (
      <div id="demo-container">
        <div
          className="ui-modal"
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <div className="ui-modal__modal">
            <header className="ui-modal__modal__header">
              <h2 className="heading--large">Create Project</h2>
            </header>

            <main
              className="ui-modal__modal__main"
              aria-describedby="dialog-description"
            >
              <p>
                An American monkey, after getting drunk on brandy, would never
                touch it again, and thus is much wiser than most men.
              </p>
            </main>

            <footer className="ui-modal__modal__footer">
              <div className="ui-btn-group ui-btn-group--align-right">
                <button
                  className="ui-btn ui-btn--medium ui-btn--tertiary"
                  onClick={toggleHtmlModal}
                >
                  Cancel
                </button>
                <button className="ui-btn ui-btn--medium ui-btn--primary">
                  Create Project
                </button>
              </div>
            </footer>
          </div>
        </div>
        <Button onClick={toggleHtmlModal}>Open Modal</Button>
      </div>
    ),
  },
];
