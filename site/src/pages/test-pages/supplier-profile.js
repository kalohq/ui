import React from 'react';
import styled from 'react-emotion';

import {
  Avatar,
  Button,
  Paper,
  StarRating,
  Icon,
  Grid,
  Row,
  Column,
  Flex,
  Box,
  ButtonGroup,
  Heading,
  Text,
  Tag,
  TagGroup,
} from '../../../../src/components';

import {
  PageLayout,
  NewLozenge,
  SkillTag,
  TabNavigation,
  TabNavigationTab,
  Entity,
  AvailabilityLozenge,
} from './_shared-components';

export default () => (
  <PageLayout withPageNavigation={false}>
    <div css={{paddingBottom: 120}}>
      <ProfileHeader>
        <Grid padding={[0, 32]}>
          <Row>
            <Column columns={12}>
              <Flex justifyContent="flex-end">
                <Button variant="tertiary" size="medium">
                  Change image
                </Button>
              </Flex>
            </Column>
          </Row>
        </Grid>
      </ProfileHeader>

      <ProfileMain>
        <Grid padding={[0, 32]}>
          <Flex>
            <ProfileAvatar src="https://randomuser.me/api/portraits/men/46.jpg" />
            <Box paddingLeft={32} paddingTop={40} flex={1}>
              <Row marginBottom="medium">
                <Column columns={12}>
                  <Flex flex={1} justifyContent="space-between">
                    <Flex>
                      <Heading size="extra-large" component="h1">
                        Quinten Kortum
                      </Heading>
                      <NewLozenge css={{marginLeft: 8}}>New</NewLozenge>
                      <AvailabilityLozenge
                        type="AVAILABLE"
                        css={{marginLeft: 8}}
                      />
                    </Flex>
                    <Button
                      variant="tertiary"
                      loneIcon={true}
                      size="medium"
                      icon="more_vert"
                    />
                  </Flex>
                </Column>
              </Row>
              <Row marginBottom="medium">
                <Column columns={12}>
                  <Text marginRight="medium">
                    <Icon>location_on</Icon>London, UK
                  </Text>
                  <Text marginRight="medium">quinten.kortum@example.com</Text>
                  <Text marginRight="medium">Add rates</Text>
                </Column>
              </Row>
              <Row>
                <Column columns={12}>
                  <TagGroup>
                    <SkillTag>Skill one</SkillTag>
                    <SkillTag>Skill one</SkillTag>
                    <SkillTag>Skill one</SkillTag>
                    <SkillTag>A longer skill</SkillTag>
                    <SkillTag>Yet another skill</SkillTag>
                    <Button size="small" variant="tertiary">
                      Add skills
                    </Button>
                  </TagGroup>
                </Column>
              </Row>
              <Row>
                <Column columns={12}>
                  <Flex justifyContent="space-between">
                    <StarRating score={3} marginTop="large" />
                    <Flex>
                      <Icon size={20}>notifications</Icon>
                      <Icon size={20}>notifications</Icon>
                      <Icon size={20}>notifications</Icon>
                    </Flex>
                  </Flex>
                </Column>
              </Row>
            </Box>
          </Flex>
        </Grid>

        <Grid padding={[0, 32]}>
          <Row>
            <Column columns={12}>
              <TabNavigation marginBottom="extra-large" marginTop="medium">
                <TabNavigationTab isSelected={true}>Profile</TabNavigationTab>
                <TabNavigationTab>Onboarding information</TabNavigationTab>
                <TabNavigationTab>Messages</TabNavigationTab>
                <TabNavigationTab>Notes and documents</TabNavigationTab>
              </TabNavigation>
            </Column>
          </Row>
        </Grid>

        <Grid padding={[0, 32]}>
          <Row>
            <Column columns={[12, 9]}>
              <Paper padding={24} marginBottom="medium">
                <Flex justifyContent="space-between" marginBottom="medium">
                  <Heading size="medium" icon="lock">
                    Netflix tags
                  </Heading>
                  <Button variant="tertiary" size="medium">
                    Edit tags
                  </Button>
                </Flex>
                <Flex>
                  <TagGroup limit={5} showOverflow={true}>
                    <Tag>Tag</Tag>
                    <Tag>Tagymctagface</Tag>
                    <Tag>Tagymctagface</Tag>
                    <Tag>Tag</Tag>
                    <Tag>Tag</Tag>
                    <Tag>Tag</Tag>
                    <Tag>Tag</Tag>
                    <Tag>Tag</Tag>
                    <Tag>Tag</Tag>
                    <Tag>Tag</Tag>
                  </TagGroup>
                </Flex>
              </Paper>

              <Paper padding={24} marginBottom="medium">
                <Flex justifyContent="space-between" marginBottom="large">
                  <Heading size="medium" icon="lock">
                    Feedback on Quinten
                  </Heading>
                  <Button variant="tertiary" size="medium">
                    Add feedback
                  </Button>
                </Flex>

                <GridLayout columns="1fr 1fr">
                  <FeedbackHighlightRow title="Good team fit" rating={3} />
                  <FeedbackHighlightRow title="Likes M&Ms" rating={3} />
                  <FeedbackHighlightRow title="Star rating" rating={3} />
                  <FeedbackHighlightRow title="Punctual" rating={3} />
                  <FeedbackHighlightRow
                    title="Would work with again"
                    rating={3}
                  />
                </GridLayout>

                <ExpandedFeedbackRow
                  entity={
                    <Entity
                      name="Ava Gregoraci"
                      secondary="Netflix"
                      avatarSrc="https://randomuser.me/api/portraits/men/29.jpg"
                    />
                  }
                  date="12th June"
                  rating={3}
                  feedback="In the long history of humankind (and animal kind, too) those who learned to collaborate and improvise most effectively have prevailed."
                />
                <ExpandedFeedbackRow
                  entity={
                    <Entity
                      name="Ava Gregoraci"
                      secondary="Netflix"
                      avatarSrc="https://randomuser.me/api/portraits/men/29.jpg"
                    />
                  }
                  date="12th June"
                  rating={5}
                  feedback="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. "
                />
                <ExpandedFeedbackRow
                  entity={
                    <Entity
                      name="Ava Gregoraci"
                      secondary="Netflix"
                      avatarSrc="https://randomuser.me/api/portraits/men/29.jpg"
                    />
                  }
                  date="12th June"
                  rating={1}
                  feedback=" In the long history of humankind (and animal kind, too) those who learned to collaborate and improvise most effectively have prevailed."
                />
              </Paper>
              <Paper padding={[24, 24, 40]}>
                <Flex justifyContent="space-between" marginBottom="medium">
                  <Heading size="medium" icon="lock">
                    Netflix connections
                  </Heading>
                  <Button variant="tertiary" size="medium">
                    Request feedback
                  </Button>
                </Flex>
                <GridLayout columns="1fr 1fr">
                  <Entity
                    name="Anje Keizer"
                    secondary="Netflix"
                    avatarSrc="https://randomuser.me/api/portraits/men/23.jpg"
                  />
                  <Entity
                    name="Azah Anyeni"
                    secondary="Netflix"
                    avatarSrc="https://randomuser.me/api/portraits/women/97.jpg"
                  />
                  <Entity
                    name="Wilhelm Dowall"
                    secondary="Netflix"
                    avatarSrc="https://randomuser.me/api/portraits/men/16.jpg"
                  />
                  <Entity
                    name="Shaamikh Al Hakim"
                    secondary="Netflix"
                    avatarSrc="https://randomuser.me/api/portraits/women/87.jpg"
                  />
                  <Entity
                    name="Ivan Magalhaes"
                    secondary="Netflix"
                    avatarSrc="https://randomuser.me/api/portraits/men/32.jpg"
                  />
                  <Entity
                    name="Leslee Moss"
                    secondary="Netflix"
                    avatarSrc="https://randomuser.me/api/portraits/women/46.jpg"
                  />
                </GridLayout>
                <ButtonGroup align="center" marginTop={36}>
                  <Button variant="tertiary" size="small">
                    Show more
                  </Button>
                </ButtonGroup>
              </Paper>
            </Column>

            <Column columns={[12, 3]}>
              <Paper padding={24} marginBottom={16}>
                <Heading size="medium">About Quinten</Heading>
                <Text multiline={true}>
                  Some general information that Quinten has written about how
                  great she is MAX characters. Can go onto three lines but no
                  more copy copy.
                </Text>
                <Text marginTop={16}>
                  <Icon size={18}>phone</Icon>01324 434 4343
                </Text>
                <Text marginTop={16}>
                  <Icon size={18}>location_on</Icon>112 Street Name, Southwark,
                  London, SE2 5NN
                </Text>
              </Paper>

              <Paper padding={24}>
                <Heading size="medium">Quintens experience</Heading>
                <ExperienceItem
                  entity={
                    <Entity
                      name="Netflix"
                      secondary="14-18th May"
                      avatarSrc="http://logo.clearbit.com/netflix.com"
                    />
                  }
                  title="Video shoot for Narcos"
                  skills={['UI Design', 'Photography', 'Writing']}
                />
                <ExperienceItem
                  entity={
                    <Entity
                      name="Netflix"
                      secondary="14-18th May"
                      avatarSrc="http://logo.clearbit.com/netflix.com"
                    />
                  }
                  title="Video shoot for Narcos"
                  skills={['UI Design', 'Photography', 'Writing']}
                />
                <ExperienceItem
                  entity={
                    <Entity
                      name="Netflix"
                      secondary="14-18th May"
                      avatarSrc="http://logo.clearbit.com/netflix.com"
                    />
                  }
                  title="Video shoot for Narcos"
                  skills={['UI Design', 'Photography', 'Writing']}
                />
                <ExperienceItem
                  entity={
                    <Entity
                      name="Netflix"
                      secondary="14-18th May"
                      avatarSrc="http://logo.clearbit.com/netflix.com"
                    />
                  }
                  title="Video shoot for Narcos"
                  skills={['UI Design', 'Photography', 'Writing']}
                />
                <Flex justifyContent="center" marginTop={36}>
                  <Button size="small" variant="tertiary">
                    Show more
                  </Button>
                </Flex>
              </Paper>
            </Column>
          </Row>
        </Grid>
      </ProfileMain>
    </div>
  </PageLayout>
);

const ProfileHeader = styled.div`
  width: 100%;
  height: 240px;
  background-color: ${props => props.theme.colors.grey500};
  padding: 32px 0;
`;

const ProfileMain = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
`;

const ProfileAvatar = styled(Avatar)`
  top: -36px;
  position: relative;
  border: 4px solid #fff;
  width: 160px;
  height: 160px;
`;

const StyledExperienceItem = styled.article`
  position: relative;
  margin-top: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.grey300};
  padding-bottom: 24px;

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

const ExperienceItem = ({entity, skills, title}) => (
  <StyledExperienceItem>
    {entity}
    <Box marginLeft={8} marginTop={8}>
      <Heading size="small">{title}</Heading>
      <Flex marginTop={16}>
        {skills.map(skill => (
          <SkillTag css={{marginRight: 8}}>{skill}</SkillTag>
        ))}
      </Flex>
    </Box>
  </StyledExperienceItem>
);

const FeedbackHighlightRow = ({title, rating, ...otherProps}) => (
  <Flex justifyContent="space-between" {...otherProps}>
    <Heading size="small">{title}</Heading>
    <StarRating score={rating} />
  </Flex>
);

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-gap: 16px;
`;

const StyledExpandedFeedbackRow = styled(Box)`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${props => props.theme.colors.grey300};
`;

const ExpandedFeedbackRow = ({entity, date, rating, feedback}) => (
  <StyledExpandedFeedbackRow>
    <Flex justifyContent="space-between" marginBottom="medium">
      {entity}
      <Text size="extra-small">Added {date}</Text>
    </Flex>

    <FeedbackHighlightRow title="Performance" rating={rating} />

    <Text multiline={true} marginTop={16}>
      {feedback}
    </Text>
  </StyledExpandedFeedbackRow>
);
