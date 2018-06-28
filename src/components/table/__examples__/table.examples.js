/* @flow */
import React from 'react';

import Table, {TableHead, TableRow, TableCell, TableBody} from '../';
import {CELL_PADDING} from '../constants';
import {Box, Text, SkeletonAvatar, Icon} from '../..';

const AVATAR_SIZE = 32;
const ICON_BUTTON_SIZE = 24;

// NOTE This is not a component so that the insides of it render inline the
// example source code
const exampleUserRow = ({name, email, level, position}) => (
  <TableRow>
    <TableCell paddingRight={0}>
      <SkeletonAvatar height={AVATAR_SIZE} width={AVATAR_SIZE} />
    </TableCell>
    <TableCell>
      <Box>
        <Text weight="semi-bold" size="medium" lineHeight="1.3">
          {name}
        </Text>
        <Text weight="light" size="extra-small">
          {email}
        </Text>
      </Box>
    </TableCell>
    <TableCell>
      <Text weight="light" size="small">
        {level}
      </Text>
    </TableCell>
    <TableCell>
      <Text weight="light" size="small">
        {position}
      </Text>
    </TableCell>
    <TableCell>
      <Box cursor="pointer">
        <Icon size={ICON_BUTTON_SIZE} color="navy600">
          more_vert
        </Icon>
      </Box>
    </TableCell>
  </TableRow>
);

const renderExample = ({border} = {}) => () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell width={`calc(${AVATAR_SIZE}px + ${CELL_PADDING})`}>
          Name
        </TableCell>
        <TableCell />
        <TableCell>User Level</TableCell>
        <TableCell>Position</TableCell>
        <TableCell
          width={`calc(${ICON_BUTTON_SIZE}px + 2 * ${CELL_PADDING})`}
        />
      </TableRow>
    </TableHead>
    <TableBody border={border}>
      {exampleUserRow({
        name: 'Mike Jablonski',
        email: 'mike@acme.com',
        level: 'Standard User',
        position: 'Editor',
      })}
      {exampleUserRow({
        name: 'Emily Davies',
        email: 'emily.has.a.very.long.email.address@acme.com',
        level: 'Team Owner',
        position: 'HR Manager',
      })}
    </TableBody>
  </Table>
);

export const examples = [
  {
    title: 'Table',
    description: 'A lightweight table with basic styling ✨',
    render: renderExample(),
  },
  {
    title: 'Borderless table',
    description: 'Sure, borders are optional ✌️',
    render: renderExample({border: false}),
  },
];
