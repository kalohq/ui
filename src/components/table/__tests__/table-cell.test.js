/* eslint-env jest */
import React from 'react';
import Icon from '../../icon';
import {shallow} from 'enzyme';
import {TableCell} from '../';

describe('<TableCell />', () => {
  it('should render children', () => {
    const result = shallow(
      <TableCell>
        <div>Hello</div>
      </TableCell>
    );
    const div = result.find('div');
    expect(div.length).toBe(1);
    expect(div.props().children).toEqual('Hello');
  });

  describe('when a descendant of <TableHead />', () => {
    describe('and order is `desc`', () => {
      it('should render a down arrow icon', () => {
        const result = shallow(
          <TableCell id="greetings" order="desc" orderBy="greetings">
            Greetings
          </TableCell>,
          {
            context: {table: {head: true}},
          }
        );
        const icon = result.find(Icon);
        expect(icon.props().children).toEqual('keyboard_arrow_down');
      });
    });

    describe('and order is `asc`', () => {
      it('should render an up arrow icon', () => {
        const result = shallow(
          <TableCell id="greetings" order="asc" orderBy="greetings">
            Greetings
          </TableCell>,
          {
            context: {table: {head: true}},
          }
        );
        const icon = result.find(Icon);
        expect(icon.props().children).toEqual('keyboard_arrow_up');
      });
    });
  });

  describe('when a descendant of <TableBody />', () => {
    it('should not render an icon', () => {
      const result = shallow(
        <TableCell id="greetings" order="asc" orderBy="greetings">
          Greetings
        </TableCell>,
        {
          context: {table: {body: true}},
        }
      );
      const icon = result.find(Icon);
      expect(icon.length).toBe(0);
    });
  });
});
