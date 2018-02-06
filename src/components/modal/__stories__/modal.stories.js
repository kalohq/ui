import * as React from 'react';

import Modal, {ModalBody, ModalActions} from '../modal';
import Button from '../../button';
import ButtonGroup from '../../button-group';
import Text from '../../text';
import H3 from '../../h3';

class DemoModal extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <span>
        <Button theme="tertiary" onClick={this.toggleModal}>
          Open Modal
        </Button>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            open: this.state.open,
            onCloseRequest: this.toggleModal,
          })
        )}
      </span>
    );
  }
}

export const examples = [
  {
    title: 'Modal',
    description: 'A standard Modal',
    render: () => (
      <DemoModal>
        <Modal title="Remove freelancer">
          <ModalBody>
            <Text multiline={true}>
              Are you sure you want to remove Bob from Kalo. You cannot assign
              tasks or track feedback for removed freelancers.
            </Text>
          </ModalBody>
          <ModalActions>
            <ButtonGroup justifyContent="center" spacing={true}>
              <Button theme="tertiary">Cancel</Button>
              <Button theme="delete">Remove</Button>
            </ButtonGroup>
          </ModalActions>
        </Modal>
      </DemoModal>
    ),
  },
  {
    title: 'With multiple body elements',
    description:
      "When using multiple ModalBody components, it is recommended to pass the 'subdued' prop to every other instance",
    render: () => (
      <DemoModal>
        <Modal title="Remove freelancer">
          <ModalBody>
            <Text multiline={true}>
              <H3>Freelancer Bob</H3>
            </Text>
          </ModalBody>
          <ModalBody subdued={true}>
            <Text multiline={true}>
              Are you sure you want to remove Bob from Kalo. You cannot assign
              tasks or track feedback for removed freelancers.
            </Text>
          </ModalBody>
          <ModalActions>
            <ButtonGroup justifyContent="center" spacing={true}>
              <Button theme="tertiary">Cancel</Button>
              <Button theme="delete">Remove</Button>
            </ButtonGroup>
          </ModalActions>
        </Modal>
      </DemoModal>
    ),
  },
];
