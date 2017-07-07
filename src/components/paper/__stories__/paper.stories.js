/* @flow */
import React from 'react';
import {storiesOf} from '@storybook/react';

import Paper from 'components/paper';
import H3 from 'components/h3';
import Text from 'components/text';
import Icon from 'components/icon';
import {Flex, Box} from 'components/layout';
import Checkbox from 'components/checkbox';

storiesOf(
  'Paper',
  module
).addWithInfo('Paper', 'A wrapping box container', () => {
  return (
    <Paper elevation={1} hoverElevation={1} border={true}>
      <Flex width={800} padding={20}>
        <Box alignItems="center" justifyContent="center" marginRight={20}>
          <Checkbox />
        </Box>
        <Box marginRight={60}>
          <H3 marginTop={0}>The Design Agency</H3>
          <Text>January 7, 12:40 AM</Text>
        </Box>
        <Box
          flexDirection="row"
          marginLeft="auto"
          alignItems="center"
          justifyContent="center"
        >
          <H3 marginTop={0} marginRight={20} color="green">
            Invoice Approved
          </H3>
          <Icon size={24} color="slate">
            more_vert
          </Icon>
        </Box>
      </Flex>
    </Paper>
  );
});
