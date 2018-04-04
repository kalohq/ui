import React from 'react';

import {Box} from '../../layout';
import * as variables from '../../../design-tokens/tokens.module.js';

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
} from '../';

/** Dummy page size */
const PAGE_SIZE = 1080;

/** Page background display container */
function Page({children, ...styleProps}) {
  const style = {
    background: variables.grey200,
  };

  return (
    <Box style={style} {...styleProps}>
      {children}
    </Box>
  );
}

export const examples = [
  {
    title: 'Skeleton Button',
    description: 'A skeleton button',
    render: () => <SkeletonButton size={10} />,
  },
  {
    title: 'Skeleton Card Index',
    description: 'A complete skeleton layout with card grid',
    render: () => (
      <Page width={PAGE_SIZE + 100}>
        <SkeletonPageHeader>
          <SkeletonPageHeaderHeading width={PAGE_SIZE}>
            <SkeletonText width="8%" />
            <SkeletonButton square={true} />
          </SkeletonPageHeaderHeading>
          <SkeletonPageHeaderToolbar width={PAGE_SIZE}>
            <SkeletonText width="4%" />
            <SkeletonText width="4%" />
            <SkeletonText width="4%" />
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
    ),
  },
  {
    title: 'Skeleton List Index',
    description: 'A complete skeleton layout with item list',
    render: () => (
      <Page width={PAGE_SIZE + 100}>
        <SkeletonPageHeader>
          <SkeletonPageHeaderHeading width={PAGE_SIZE}>
            <SkeletonText width="10%" />
            <SkeletonAvatar size={2} />
          </SkeletonPageHeaderHeading>
          <SkeletonPageHeaderToolbar width={PAGE_SIZE}>
            <SkeletonText width="4%" />
            <SkeletonText width="4%" />
            <SkeletonText width="4%" />
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
    ),
  },
  {
    title: 'Skeleton header tabs',
    description: 'A skeleton header with tabs rather than seperated toolbar',
    render: () => (
      <Page width={PAGE_SIZE + 100}>
        <SkeletonPageHeader>
          <SkeletonPageHeaderHeading width={PAGE_SIZE}>
            <SkeletonText heading={true} width="20%" />
            <SkeletonButton square={true} />
          </SkeletonPageHeaderHeading>
          <SkeletonPageHeaderTabs width={PAGE_SIZE}>
            <SkeletonText width="8%" />
            <SkeletonText width="8%" />
            <SkeletonText width="8%" />
          </SkeletonPageHeaderTabs>
        </SkeletonPageHeader>
        <SkeletonPage width={PAGE_SIZE} />
      </Page>
    ),
  },
  {
    title: 'Overridden card content',
    description: 'Override the vertical content of cards by passing children',
    render: () => (
      <Page width={380} padding={30}>
        <SkeletonCard>
          <SkeletonText width="30%" />
          <SkeletonText />
          <SkeletonText width="20%" />
          <SkeletonText />
          <SkeletonText width="40%" />
          <SkeletonButton size={18} />
        </SkeletonCard>
      </Page>
    ),
  },
  {
    title: 'Overridden list item content',
    description:
      'Override the horizontal content of list item by passing children',
    render: () => (
      <Page padding={30}>
        <SkeletonListItem>
          <SkeletonText width="20%" />
          <SkeletonText />
          <SkeletonText width="10%" />
          <SkeletonText />
          <SkeletonText width="20%" />
          <SkeletonButton size={18} />
        </SkeletonListItem>
      </Page>
    ),
  },
  {
    title: 'Custom layouts',
    description: 'Use lists and grids to represent structured pages',
    render: () => (
      <Page padding={30}>
        <SkeletonGrid center={false}>
          <SkeletonList center={false}>
            <SkeletonPaper>
              <SkeletonList center={false}>
                <SkeletonText width="50%" heading={true} />
                <SkeletonText width="15%" />
                <SkeletonText width="80%" />
                <SkeletonText width="70%" />
                <SkeletonText width="80%" />
                <SkeletonText width="20%" />
              </SkeletonList>
            </SkeletonPaper>
          </SkeletonList>
          <SkeletonList>
            <SkeletonPaper>
              <SkeletonList center={false}>
                <SkeletonText heading={true} />
                <SkeletonText width="10%" />
              </SkeletonList>
            </SkeletonPaper>
          </SkeletonList>
        </SkeletonGrid>
      </Page>
    ),
  },
];
