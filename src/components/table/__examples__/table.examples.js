/* @flow */
import React from 'react';

import Table, {TableHead, TableRow, TableCell, TableBody} from '../';
import {CELL_PADDING} from '../constants';
import {Box, Text, SkeletonAvatar, Icon} from '../..';

const AVATAR_SIZE = 32;
const ICON_BUTTON_SIZE = 24;

const ExampleUserRow = ({name, email, level, position}) => (
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
    <TableCell paddingLeft={0} paddingRight={0}>
      <Box cursor="pointer">
        <Icon size={ICON_BUTTON_SIZE} color="navy600">
          more_vert
        </Icon>
      </Box>
    </TableCell>
  </TableRow>
);

export const examples = [
  {
    title: 'Table',
    description: 'A lightweight table with basic styling',
    render: () => (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width={`calc(${AVATAR_SIZE}px + ${CELL_PADDING})`}>
              Name
            </TableCell>
            <TableCell />
            <TableCell>User Level</TableCell>
            <TableCell>Position</TableCell>
            <TableCell width={ICON_BUTTON_SIZE} />
          </TableRow>
        </TableHead>
        <TableBody>
          <ExampleUserRow
            name="Mike Jablonski"
            email="mike@acme.com"
            level="Standard User"
            position="Editor"
          />
          <ExampleUserRow
            name="Emily Davies"
            email="emily.has.a.very.long.email.address@acme.com"
            level="Team Owner"
            position="HR Manager"
          />
        </TableBody>
      </Table>
    ),
  },
];
