/* @flow */
/* eslint-env mocha */
import expect from 'expect';
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';

import Avatar, {AvatarImage} from '../avatar';
import CustomIcon from 'components/custom-icon';
import Icon from 'components/icon';
import LoadingSpinner from 'components/loading-spinner';

const _src = '//wherever.com/record.png';
const _subRecordSrc = '//wherever.com/subrecord.png';

describe('components/avatar', () => {

  describe('Avatar', () => {

    const create = testComponent(Avatar, () => ({
      size: 'medium',
      src: _src,
      record: 'Bob Smith',
    }));

    it('should render shallow component ok', () => {
      const {element} = create();
      const result = shallow(element);
      expect(result.find(AvatarImage).prop('src')).toBe(_src);
    });

    it('should render a subRecord badge when passed to it', () => {
      const {props, element} = create({
        subRecord: 'Alex Pate',
        subRecordSrc: _subRecordSrc,
      });

      const result = shallow(element);
      expect(
        result.find(AvatarImage).props().src
      ).toBe(_src);
      expect(
        result.find(Avatar).length
      ).toBe(1);
      expect(
        result.find(Avatar).props().record
      ).toBe(props.subRecord);
    });

    it('should render a lysted badge if confirmed', () => {
      const {element} = create({
        confirmed: true,
        size: 'small',
      });
      const result = shallow(element);
      expect(
        result.find(CustomIcon).filter({children: 'lysted'}).length
      ).toBe(1);
      result.setProps({size: 'large'});
      expect(
        result.find(CustomIcon).filter({children: 'lysted'}).length
      ).toBe(1);
    });

    it('should render upload prompts in upload mode', () => {
      const {element} = create({
        editable: true,
      });
      const result = shallow(element);
      expect(
        result.find(Icon).filter({children: 'edit'}).length
      ).toBe(1);
    });

    it('should render upload prompts once a new image has been uploaded', () => {
      const {element} = create({
        showUploaded: true,
        uploaded: true,
      });
      const result = shallow(element);
      expect(
        result.find(Icon).filter({children: 'done'}).length
      ).toBe(1);
    });

    it('should render an uploading prompt in uploading mode', () => {
      const {element} = create({
        editable: true,
        uploading: true,
      });
      const result = shallow(element);
      expect(
        result.find(LoadingSpinner).length
      ).toBe(1);
    });

  });

});
