/* eslint-env jest */
import * as React from 'react';
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
} from '../';

describe('components/skeleton', () => {
  const createForSnapshot = children => renderer.create(children).toJSON();

  describe('SkeletonAvatar', () => {
    test('should render shallow component ok', () => {
      const element = createForSnapshot(<SkeletonAvatar size={2} />);
      expect(element).toMatchSnapshot();
    });
  });
  describe('SkeletonButton', () => {
    test('should render shallow component ok', () => {
      const element = createForSnapshot(<SkeletonButton square={true} />);
      expect(element).toMatchSnapshot();
    });
  });
  describe('SkeletonText', () => {
    test('should render shallow component ok', () => {
      const element = createForSnapshot(<SkeletonText />);
      expect(element).toMatchSnapshot();
    });
  });
  describe('SkeletonList', () => {
    test('should render shallow component ok', () => {
      const element = createForSnapshot(
        <SkeletonList>
          <SkeletonListItem />
          <SkeletonListItem />
          <SkeletonListItem />
        </SkeletonList>
      );
      expect(element).toMatchSnapshot();
    });
  });
  describe('SkeletonGrid', () => {
    test('should render shallow component ok', () => {
      const element = createForSnapshot(
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
      );
      expect(element).toMatchSnapshot();
    });
  });
  describe('SkeletonGrid', () => {
    test('should render shallow component ok', () => {
      const element = createForSnapshot(
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
      );
      expect(element).toMatchSnapshot();
    });
  });
});
