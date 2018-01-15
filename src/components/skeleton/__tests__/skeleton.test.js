/* @flow */
/* eslint-env jest */
import * as React from 'react';
import {sheet} from 'emotion';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';

import {
  SkeletonGrid,
  SkeletonList,
  SkeletonText,
  SkeletonButton,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonListItem,
  SkeletonPageHeader,
  SkeletonPageHeaderToolbar,
  SkeletonPageHeaderHeading,
  SkeletonPage,
  SkeletonPaper,
} from '../skeleton';

expect.addSnapshotSerializer(serializer(sheet));

describe('components/skeleton', () => {
  describe('SkeletonAvatar', () => {
    test('should render shallow component ok', () => {
      const element = renderer.create(<SkeletonAvatar size={2} />).toJSON();
      expect(element).toMatchSnapshot();
    });
  });
  describe('SkeletonButton', () => {
    test('should render shallow component ok', () => {
      const element = renderer
        .create(<SkeletonButton square={true} />)
        .toJSON();
      expect(element).toMatchSnapshot();
    });
  });
  describe('SkeletonText', () => {
    test('should render shallow component ok', () => {
      const element = renderer.create(<SkeletonText />).toJSON();
      expect(element).toMatchSnapshot();
    });
  });
  describe('SkeletonList', () => {
    test('should render shallow component ok', () => {
      const element = renderer
        .create(
          <SkeletonList>
            <SkeletonListItem />
            <SkeletonListItem />
            <SkeletonListItem />
          </SkeletonList>
        )
        .toJSON();
      expect(element).toMatchSnapshot();
    });
  });
  describe('SkeletonGrid', () => {
    test('should render shallow component ok', () => {
      const element = renderer
        .create(
          <SkeletonGrid center={false}>
            <SkeletonList center={false}>
              <SkeletonPaper>
                <SkeletonList center={false}>
                  <SkeletonText size={14} heading={true} />
                </SkeletonList>
              </SkeletonPaper>
            </SkeletonList>
            <SkeletonList>
              <SkeletonPaper>
                <SkeletonList center={false}>
                  <SkeletonText heading={true} />
                  <SkeletonText size={14} />
                </SkeletonList>
              </SkeletonPaper>
            </SkeletonList>
          </SkeletonGrid>
        )
        .toJSON();
      expect(element).toMatchSnapshot();
    });
  });
  describe('SkeletonGrid', () => {
    test('should render shallow component ok', () => {
      const element = renderer
        .create(
          <div>
            <SkeletonPageHeader>
              <SkeletonPageHeaderHeading width={1100}>
                <SkeletonText />
                <SkeletonButton square={true} />
              </SkeletonPageHeaderHeading>
              <SkeletonPageHeaderToolbar width={1100}>
                <SkeletonText />
                <SkeletonText />
                <SkeletonText />
              </SkeletonPageHeaderToolbar>
            </SkeletonPageHeader>
            <SkeletonPage width={1100}>
              <SkeletonGrid>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </SkeletonGrid>
            </SkeletonPage>
          </div>
        )
        .toJSON();
      expect(element).toMatchSnapshot();
    });
  });
});
