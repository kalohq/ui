import React from 'react';
import {storiesOf} from '@kadira/storybook';

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
} from '../skeleton';

function Page({children, ...styleProps}) {
  const style = {
    background: variables['--color-grey-snow'],
  };
  
  return (
    <Box style={style} {...styleProps}>{children}</Box>
  );
}

/** Dummy page size */
const PAGE_SIZE = 1080;

storiesOf('Skeleton', module)
  .addWithInfo(
    'Skeleton Card Index',
    'A complete skeleton layout with card grid',
    () => (
      <Page>
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
        <SkeletonPage width={PAGE_SIZE + 100}>
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
      <Page>
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
        <SkeletonPage width={PAGE_SIZE + 100}>
          <SkeletonList>
            <SkeletonListItem />
            <SkeletonListItem />
            <SkeletonListItem />
          </SkeletonList>
        </SkeletonPage>
      </Page>
    )
  );