import React from 'react';
import {storiesOf} from '@storybook/react';
import {Box} from '../../layout';

import Alert, {AlertPopover} from '../';

/**
 * Really hacky container just to get the example visible even though
 * positioning is awful. This is because storybook renders components
 * inside an absolute iframe.
 */
function PopoverExampleContainer({children}) {
  return (
    <Box position="absolute" right={-500} top={-50}>
      {children}
    </Box>
  );
}

storiesOf('Alert', module)
  .addWithInfo('Info Alert', 'An alert to display information', () => {
    return <Alert type="info">Information Alert</Alert>;
  })
  .addWithInfo(
    'Info Alert (with icon)',
    'An alert to display information',
    () => {
      return (
        <Alert type="info" showIcon={true}>
          Information Alert
        </Alert>
      );
    }
  )
  .addWithInfo('Warning Alert', 'An alert to display a warning', () => {
    return <Alert type="warning">Warning Alert</Alert>;
  })
  .addWithInfo(
    'Warning Alert (with icon)',
    'An alert to display a warning',
    () => {
      return (
        <Alert type="warning" showIcon={true}>
          Warning Alert
        </Alert>
      );
    }
  )
  .addWithInfo('Error Alert', 'An alert to display an error', () => {
    return <Alert type="error">Error Alert</Alert>;
  })
  .addWithInfo(
    'Error Alert (with icon)',
    'An alert to display an error',
    () => {
      return (
        <Alert type="error" showIcon={true}>
          Error Alert
        </Alert>
      );
    }
  )
  .addWithInfo(
    'Confirmation Alert',
    'An alert to display a confirmation',
    () => {
      return <Alert type="confirmation">Confirmation Alert</Alert>;
    }
  )
  .addWithInfo(
    'Confirmation Alert (with icon)',
    'An alert to display a confirmation',
    () => {
      return (
        <Alert type="confirmation" showIcon={true}>
          Confirmation Alert
        </Alert>
      );
    }
  )
  .addWithInfo(
    'Block Alert',
    'Alerts will by default fit the horizontal space of their parent container',
    () => {
      return (
        <Box width={500}>
          <Alert type="info">Information Alert</Alert>
        </Box>
      );
    }
  )
  .addWithInfo(
    'Popover Alert',
    'A container to render alerts anchored absolutely to top right of screen',
    () => {
      return (
        <PopoverExampleContainer>
          <AlertPopover>
            <Alert type="info">Information Alert</Alert>
          </AlertPopover>
        </PopoverExampleContainer>
      );
    }
  )
  .addWithInfo(
    'Popover Alert (multiple)',
    'A container to render multiple alerts anchored absolutely to top right of screen',
    () => {
      return (
        <PopoverExampleContainer>
          <AlertPopover>
            <Alert type="info" showIcon={true}>
              Information Alert
            </Alert>
            <Alert type="warning" showIcon={true}>
              Warning Alert
            </Alert>
            <Alert type="error" showIcon={true}>
              Error Alert
            </Alert>
            <Alert type="confirmation" showIcon={true}>
              Confirmation Alert
            </Alert>
          </AlertPopover>
        </PopoverExampleContainer>
      );
    }
  );
