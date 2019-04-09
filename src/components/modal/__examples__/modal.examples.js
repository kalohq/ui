import React from 'react';

import Modal from '../';
import Button from '../../button';
import ButtonGroup from '../../button-group';
import Text from '../../text';
import FieldRow from '../../field-row';
import Field from '../../field';
import Input from '../../input';

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
          onClose: !this.props.noClose && this.toggleOpen,
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
          title="Create Account"
          actions={
            <ButtonGroup spacing={true} align="right">
              <Button size="large" variant="tertiary">
                Cancel
              </Button>
              <Button size="large" variant="primary">
                Create Account
              </Button>
            </ButtonGroup>
          }
        >
          <FieldRow>
            <Field label="Your name">
              <Input type="text" placeholder="John Smith" />
            </Field>
          </FieldRow>
          <FieldRow>
            <Field label="Your email">
              <Input type="text" placeholder="john.smith@example.net" />
            </Field>
          </FieldRow>
          <FieldRow>
            <Field label="Choose a password" hint="Minimum of 8 characters">
              <Input type="text" placeholder="123456" />
            </Field>
          </FieldRow>
        </Modal>
        ,
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
  {
    title: 'Remove default footer',
    render: () => (
      <DemoModal>
        <Modal title="Create Project">
          <Text multiline={true}>
            An American monkey, after getting drunk on brandy, would never touch
            it again, and thus is much wiser than most men.
          </Text>
        </Modal>
        ,
      </DemoModal>
    ),
  },
  {
    title: 'A non-dismissable modal',
    render: () => (
      <DemoModal noClose={true}>
        <Modal title="Warning">
          <Text multiline={true}>This modal can't be closed</Text>
        </Modal>
        ,
      </DemoModal>
    ),
  },
  {
    title: 'Tall body',
    render: () => (
      <DemoModal>
        <Modal
          hasFixedFooter={true}
          hasFixedHeader={true}
          title="Create Project"
          actions={
            <ButtonGroup spacing={true} align="right">
              <Button size="large" variant="tertiary">
                Cancel
              </Button>
              <Button size="large" variant="primary">
                Create Project
              </Button>
            </ButtonGroup>
          }
        >
          {Array.apply(0, Array(10)).map(x => (
            <Text multiline={true} key={x}>
              Etiam aliquet turpis non est euismod egestas. Morbi fermentum
              maximus quam, ac porta lorem auctor ac. Vivamus sodales libero nec
              turpis iaculis, eu mollis risus ornare. Aliquam porttitor, metus
              vitae dignissim euismod, lacus felis luctus massa, eleifend
              convallis arcu odio cursus felis. Pellentesque eu tincidunt lacus.
              Etiam suscipit eget justo ac vulputate. Phasellus nec tempus nunc,
              et egestas dui. Praesent ullamcorper eros et aliquam ullamcorper.
              Cras eget metus feugiat, bibendum nisl id, facilisis ipsum.
            </Text>
          ))}
        </Modal>
        ,
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
            <header className="ui-modal__modal__header ui-modal__modal__header--fixed">
              <h2 className="heading--large">Create Project</h2>
            </header>

            <main
              className="ui-modal__modal__main"
              aria-describedby="dialog-description"
            >
              {Array.apply(0, Array(10)).map(x => (
                <p key={x}>
                  Etiam aliquet turpis non est euismod egestas. Morbi fermentum
                  maximus quam, ac porta lorem auctor ac. Vivamus sodales libero
                  nec turpis iaculis, eu mollis risus ornare. Aliquam porttitor,
                  metus vitae dignissim euismod, lacus felis luctus massa,
                  eleifend convallis arcu odio cursus felis. Pellentesque eu
                  tincidunt lacus. Etiam suscipit eget justo ac vulputate.
                  Phasellus nec tempus nunc, et egestas dui. Praesent
                  ullamcorper eros et aliquam ullamcorper. Cras eget metus
                  feugiat, bibendum nisl id, facilisis ipsum.
                </p>
              ))}
            </main>

            <footer className="ui-modal__modal__footer ui-modal__modal__footer--fixed">
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
