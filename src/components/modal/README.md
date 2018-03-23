# Modal

Modals are used frequently across the platform: nearly all resource creation takes place in them.

## Best practices

- The title should be directly linked to the main action button of the modal. For example, for creating a new project, the title should be 'Create Project, and the action button 'Create Project'.

## Usage

*See below for more detailed examples*

```javascript
import {Modal, ModalBody, ModalActions, ButtonGroup, Button} from '@kalo/ui';

<Modal title="Create Invoice">
  <ModalBody>{MODAL_CONTENTS}</ModalBody>
  <ModalActions>
    <ButtonGroup justifyContent="center" spacing={true}>
      <Button theme="tertiary">Cancel</Button>
      <Button theme="delete">Create invoice</Button>
    </ButtonGroup>
  </ModalActions>
</Modal>
```