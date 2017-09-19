import React from 'react';
import {storiesOf} from '@storybook/react';

import {Box} from '../../layout';
import {variables} from '../../../../config/global_css_variables';

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
  SkeletonPageHeaderTabs,
} from '../skeleton';

/** Dummy page size */
const PAGE_SIZE = 1080;

/** Page background display container */
function Page({children, ...styleProps}) {
  const style = {
    background: variables['--color-grey-snow'],
  };

  return (
    <Box style={style} {...styleProps}>
      {children}
    </Box>
  );
}

storiesOf('Skeleton', module)
  .addWithInfo(
    'Skeleton Card Index',
    'A complete skeleton layout with card grid',
    () => (
      <Page width={PAGE_SIZE + 100}>
        <SkeletonPageHeader>
          <SkeletonPageHeaderHeading width={PAGE_SIZE}>
            <SkeletonText />
            <SkeletonButton square={true} />
          </SkeletonPageHeaderHeading>
          <SkeletonPageHeaderToolbar width={PAGE_SIZE}>
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
          </SkeletonPageHeaderToolbar>
        </SkeletonPageHeader>
        <SkeletonPage width={PAGE_SIZE}>
          <SkeletonGrid>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </SkeletonGrid>
        </SkeletonPage>
      </Page>
    )
  )
  .addWithInfo(
    'Skeleton List Index',
    'A complete skeleton layout with item list',
    () => (
      <Page width={PAGE_SIZE + 100}>
        <SkeletonPageHeader>
          <SkeletonPageHeaderHeading width={PAGE_SIZE}>
            <SkeletonText />
            <SkeletonAvatar size={2} />
          </SkeletonPageHeaderHeading>
          <SkeletonPageHeaderToolbar width={PAGE_SIZE}>
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
          </SkeletonPageHeaderToolbar>
        </SkeletonPageHeader>
        <SkeletonPage width={PAGE_SIZE}>
          <SkeletonList>
            <SkeletonListItem />
            <SkeletonListItem />
            <SkeletonListItem />
          </SkeletonList>
        </SkeletonPage>
      </Page>
    )
  )
  .addWithInfo(
    'Skeleton header tabs',
    'A skeleton header with tabs rather than seperated toolbar',
    () => (
      <Page width={PAGE_SIZE + 100}>
        <SkeletonPageHeader>
          <SkeletonPageHeaderHeading width={PAGE_SIZE}>
            <SkeletonText heading={true} size={14} />
            <SkeletonButton square={true} />
          </SkeletonPageHeaderHeading>
          <SkeletonPageHeaderTabs width={PAGE_SIZE}>
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
          </SkeletonPageHeaderTabs>
        </SkeletonPageHeader>
        <SkeletonPage width={PAGE_SIZE} />
      </Page>
    )
  )
  .addWithInfo(
    'Overridden card content',
    'Override the vertical content of cards by passing children',
    () => (
      <Page width={380} padding={30}>
        <SkeletonCard>
          <SkeletonText size={14} />
          <SkeletonText />
          <SkeletonText size={14} />
          <SkeletonText />
          <SkeletonText size={21} />
          <SkeletonButton size={18} />
        </SkeletonCard>
      </Page>
    )
  )
  .addWithInfo(
    'Overridden list item content',
    'Override the horizontal content of list item by passing children',
    () => (
      <Page padding={30}>
        <SkeletonListItem>
          <SkeletonText size={14} />
          <SkeletonText />
          <SkeletonText size={14} />
          <SkeletonText />
          <SkeletonText size={21} />
          <SkeletonButton size={18} />
        </SkeletonListItem>
      </Page>
    )
  )
  .addWithInfo(
    'Custom layouts',
    'Use lists and grids to represent structured pages',
    () => (
      <Page padding={30}>
        <SkeletonGrid center={false}>
          <SkeletonList center={false}>
            <SkeletonPaper>
              <SkeletonList center={false}>
                <SkeletonText size={14} heading={true} />
                <SkeletonText size={7} />
                <SkeletonText size={49} />
                <SkeletonText size={35} />
                <SkeletonText size={42} />
                <SkeletonText size={7} />
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
      </Page>
    )
  );
