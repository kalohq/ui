import React from 'react';

import Button from 'components/button';
import ButtonGroup from 'components/button-group';
import Checkbox from 'components/checkbox';

export const examples = [
  {
    title: 'Button Group',
    description:
      'A wrapping component to manage spacing and border radius between child buttons',
    example: () => (
      <ButtonGroup>
        <Button theme="tertiary" subdued={true}>
          <Checkbox />
        </Button>
        <Button theme="tertiary">Freelancers</Button>
        <Button theme="tertiary">Tasks</Button>
      </ButtonGroup>
    ),
  },
];

// storiesOf(
//   'ButtonGroup',
//   module
// ).addWithInfo(
//   'ButtonGroup',
//   'A wrapping component to manage spacing and border radius between child buttons',
//   () => {
//     return (
//       <ButtonGroup>
//         <Button theme="tertiary" subdued={true}>
//           <Checkbox />
//         </Button>
//         <Button theme="tertiary">Freelancers</Button>
//         <Button theme="tertiary">Tasks</Button>
//       </ButtonGroup>
//     );
//   }
// );
