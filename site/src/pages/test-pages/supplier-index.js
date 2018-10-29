import React from 'react';
import styled from 'react-emotion';

import {
  Button,
  Paper,
  StarRating,
  Icon,
  Grid,
  Row,
  Column,
  UIBase,
  Flex,
  Heading,
  Input,
  Text,
  List,
} from '../../../../src/components';

import {
  Avatar,
  AvailableLozenge,
  TagGroup,
  SkillTag,
  NewLozenge,
  PageLayout,
} from './_shared-components';

const suppliers = [
  {
    id: 1,
    name: 'Caspar Sawrey',
    location: 'San Franciso',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    skills: ['Photography', 'Design'],
    rating: 4,
    availability: 'Available',
    isNew: true,
  },
  {
    id: 2,
    name: 'Rafeeda El Nouri',
    location: 'Paris',
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    skills: ['English to French Translation'],
    rating: 3,
    availability: 'Available',
    isNew: false,
  },
  {
    id: 3,
    name: '',
    location: '',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    skills: [],
    rating: null,
    availability: 'Invitation Sent',
    isNew: false,
  },
  {
    id: 4,
    name: 'Regine Fretani',
    location: 'London',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    skills: ['Photography', 'Design'],
    rating: 4,
    availability: 'Available',
    isNew: true,
  },
  {
    id: 5,
    name: 'Rafeeda El Nouri',
    location: 'Paris',
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    skills: ['English to French Translation'],
    rating: 3,
    availability: 'Available',
    isNew: false,
  },
  {
    id: 6,
    name: 'Olia Grinkovz',
    location: 'Moscow',
    avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
    skills: ['UI Design'],
    rating: 4,
    availability: 'Invitation Sent',
    isNew: false,
  },
];

export default () => (
  <PageLayout>
    <Grid>
      <SupplierIndexHeader marginBottom="extra-large">
        <Row>
          <Column columns={12}>
            <Flex alignItems="center">
              <Icon size={24} color="navy700" marginRight={8}>
                view_headline
              </Icon>
              <Heading size="800" marginRight="large">
                Index
              </Heading>
              <Input size="large" theme="transparent" placeholder="Search" />
              <Button variant="primary" icon="add" marginLeft="large">
                Invite
              </Button>
            </Flex>
          </Column>
        </Row>
      </SupplierIndexHeader>

      <SupplierIndexFilterBar marginBottom="large">
        <Flex alignItems="center">
          <Filter label="More actions" />
          <Filter label="More actions" />
        </Flex>
        <Flex alignItems="center">
          <Icon size={20}>view_headline</Icon>
          <Icon size={20}>view_module</Icon>
        </Flex>
      </SupplierIndexFilterBar>

      <Flex marginBottom="large">
        <Text color="grey600">Displaying 300 matches</Text>
      </Flex>

      <SupplierIndex>
        <List columns={3} spaced="large">
          {suppliers.map(supplier => (
            <SupplierCard key={supplier.id} supplier={supplier} />
          ))}
        </List>
      </SupplierIndex>
    </Grid>
  </PageLayout>
);

const SupplierIndexHeader = styled(UIBase)`
  background-color: ${props => props.theme.colors.white};
  padding: 32px 0 0;
`;

const SupplierIndex = Flex;

const SupplierCard = ({supplier}) => (
  <Paper padding={24}>
    <Flex justifyContent="space-between" marginBottom={24}>
      <AvailableLozenge>Available</AvailableLozenge>
      <Button
        variant="tertiary"
        loneIcon={true}
        size="small"
        icon="more_vert"
      />
    </Flex>
    <Flex justifyContent="center" marginBottom={16}>
      <Avatar src={supplier.avatar} size={90} />
    </Flex>
    <Flex alignItems="center" flexDirection="column" marginBottom={16}>
      <Heading
        size="700"
        marginBottom={14}
        color={supplier.name ? 'navy700' : 'grey500'}
      >
        {supplier.name ? supplier.name : 'No name added'}
        {supplier.isNew && <NewLozenge>New</NewLozenge>}
      </Heading>
      <Text color={supplier.location ? 'navy700' : 'grey500'}>
        {supplier.location ? supplier.location : 'No location added'}
      </Text>
    </Flex>
    <Flex justifyContent="center" marginBottom={16}>
      {supplier.skills && supplier.skills.length >= 1 ? (
        <TagGroup>
          {supplier.skills.map(skill => <SkillTag>{skill}</SkillTag>)}
        </TagGroup>
      ) : (
        <Text color="grey500">No skills added</Text>
      )}
    </Flex>
    <Flex justifyContent="center" marginBottom={16}>
      <StarRating score={supplier.rating} />
    </Flex>
  </Paper>
);

const SupplierIndexFilterBar = styled(UIBase)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.grey300};
  height: 44px;
`;

const Filter = ({label}) => (
  <Flex alignItems="center" padding={[12, 16]}>
    <Text color="navy700" marginRight={8}>
      {label}
    </Text>
    <Icon>keyboard_arrow_down</Icon>
  </Flex>
);
