/* @flow */
import React from 'react';
import styled from 'react-emotion';

import {Grid, Row, Column} from '../grid';
import H3 from '../../h3';
import Text from '../../text';
import Input from '../../input';

const DemoSlab = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 16px;
  color: ${props => props.theme.colors.navy500};
  border: 1px solid ${props => props.theme.colors.grey400};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

DemoSlab.displayName = 'DemoSlab';

const DemoCard = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid ${props => props.theme.colors.grey400};
  padding: 16px 16px;
`;

DemoCard.displayName = 'DemoCard';

export const examples = [
  {
    title: 'Grid',
    description: 'A standard Grid',
    render: () => (
      <Grid>
        <Row marginBottom="large" alignItems="center">
          <Column columns={2}>
            <DemoSlab>2</DemoSlab>
          </Column>
          <Column columns={10}>
            <DemoSlab>10</DemoSlab>
          </Column>
        </Row>

        <Row marginBottom="large">
          <Column columns={3}>
            <DemoSlab>3</DemoSlab>
          </Column>
          <Column columns={9}>
            <DemoSlab>9</DemoSlab>
          </Column>
        </Row>

        <Row marginBottom="large">
          <Column columns={4}>
            <DemoSlab>4</DemoSlab>
          </Column>
          <Column columns={8}>
            <DemoSlab>8</DemoSlab>
          </Column>
        </Row>

        <Row>
          <Column columns={12}>
            <DemoSlab>12</DemoSlab>
          </Column>
        </Row>
      </Grid>
    ),
  },
  {
    title: 'Nested grid',
    description: 'Rows and columns can be nested as deeply as possible',
    render: () => (
      <Grid>
        <Row marginBottom="large" alignItems="center">
          <Column columns={2}>
            <DemoSlab>2</DemoSlab>
          </Column>
          <Column columns={10}>
            <DemoSlab>
              <Row>
                <Column columns={2}>
                  <DemoSlab>2</DemoSlab>
                </Column>
                <Column columns={10}>
                  <DemoSlab>
                    <Row>
                      <Column columns={5}>
                        <DemoSlab>5</DemoSlab>
                      </Column>
                      <Column columns={7}>
                        <DemoSlab>7</DemoSlab>
                      </Column>
                    </Row>
                  </DemoSlab>
                </Column>
              </Row>
            </DemoSlab>
          </Column>
        </Row>
      </Grid>
    ),
  },
  {
    title: 'With justification',
    description: 'Justification can be added to horizontally align columns',
    render: () => (
      <Grid>
        <Row justifyContent="space-between">
          <Column columns={2}>
            <DemoSlab>2</DemoSlab>
          </Column>
          <Column columns={2}>
            <DemoSlab>2</DemoSlab>
          </Column>
        </Row>
      </Grid>
    ),
  },
  {
    title: 'Card example',
    description: 'An example of how to use the grid inside a card',
    render: () => (
      <Grid>
        <DemoCard>
          <Row spacing="small" alignItems="center">
            <Column columns={4}>
              <H3 margin="none">A longer project title</H3>
            </Column>
            <Column columns={2}>
              <Text>Project Ongoing</Text>
            </Column>
          </Row>
        </DemoCard>
      </Grid>
    ),
  },
  {
    title: 'Form example',
    description: 'An example of how to use the grid with form elements',
    render: () => (
      <Grid>
        <Row spacing="medium" alignItems="center">
          <Column columns={6}>
            <Input placeholder="Your name" />
          </Column>
          <Column columns={6}>
            <Input placeholder="Your email" />
          </Column>
        </Row>
      </Grid>
    ),
  },
];
