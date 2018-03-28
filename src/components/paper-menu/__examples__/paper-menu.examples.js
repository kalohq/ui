import React from 'react';

import PaperMenu, {PaperMenuItem} from '../';
import {Flex, Box} from '../../layout';
import Text from '../../text';
import Button from '../../button';

export const examples = [
  {
    title: 'PaperMenu',
    description: 'A dropdown menu utilising Paper styling',
    render: () => <Example />,
  },
];

const InnerLayoutForDemo = props => (
  <Flex flexDirection="column">
    <Text size="medium" color="slate">
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
      <Box width={600} height={500} padding={48}>
        <Button size="large" onClick={this.toggle}>
          Toggle dropdown
        </Button>
        <PaperMenu
          origin="top left"
          anchor="left"
          offset={{x: 0, y: 0}}
          sticky={{width: '300px'}}
          open={this.state.open}
        >
          <PaperMenuItem
            minWidth={300}
            title="Switch teams"
            icon="add"
            iconAfter="face"
          >
            <InnerLayoutForDemo>Switch Teams</InnerLayoutForDemo>
          </PaperMenuItem>
          <PaperMenuItem title="Logout">
            <InnerLayoutForDemo>Logout</InnerLayoutForDemo>
          </PaperMenuItem>
          <PaperMenuItem
            component="a"
            href="http://kalohq.com"
            title="As a link"
          >
            <InnerLayoutForDemo>This is actually a link</InnerLayoutForDemo>
          </PaperMenuItem>
        </PaperMenu>
      </Box>
    );
  }
}
