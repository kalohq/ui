import React from 'react';
import {storiesOf} from '@storybook/react';

import PaperMenu, {PaperMenuItem} from 'components/paper-menu';
import {Flex, Box} from 'components/layout';
import Text from 'components/text';
import Button from 'components/button';

storiesOf(
  'PaperMenu',
  module
).addWithInfo('PaperMenu', 'A dropdown menu utilising Paper styling', () => {
  return <Example />;
});

const InnerLayoutForDemo = props => (
  <Flex flexDirection="column">
    <Text size="small" color="silver">
      {props.children}
    </Text>
  </Flex>
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
      <Box
        width={600}
        height={500}
        padding={48}
        style={{backgroundColor: 'var(--grey300)'}}
      >
        <Button size="large" onClick={this.toggle}>
          Toggle dropdown
        </Button>
        <PaperMenu
          origin="top right"
          anchor="left"
          offset={{x: 0, y: 0}}
          sticky={{width: '300px'}}
          open={this.state.open}
        >
          <PaperMenuItem title="Switch teams">
            <InnerLayoutForDemo>Switch Teams</InnerLayoutForDemo>
          </PaperMenuItem>
          <PaperMenuItem title="Logout">
            <InnerLayoutForDemo>Logout</InnerLayoutForDemo>
          </PaperMenuItem>
        </PaperMenu>
      </Box>
    );
  }
}
