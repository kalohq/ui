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
  Flex,
  Box,
  ButtonGroup,
  Heading,
  Text,
} from '../../../../src/components';

import {
  PageLayout,
  Avatar,
  NewLozenge,
  AvailableLozenge,
  TagGroup,
  SkillTag,
  TabNavigation,
  TabNavigationTab,
  Hr,
  Entity,
  Tag,
} from './_shared-components';

export default () => (
  <PageLayout>
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
            <ProfileAvatar
              size={160}
              src="https://randomuser.me/api/portraits/men/46.jpg"
            />
            <Box paddingLeft={32} paddingTop={40} flex={1}>
              <Row marginBottom="medium">
                <Column columns={12}>
                  <Flex flex={1} justifyContent="space-between">
                    <Flex>
                      <Heading size="800" component="h1">
                        Quinten Kortum
                      </Heading>
                      <NewLozenge css={{marginLeft: 8}}>New</NewLozenge>
                      <AvailableLozenge css={{marginLeft: 8}}>
                        Available
                      </AvailableLozenge>
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
                  <Heading size="600">Netflix tags</Heading>
                  <Button variant="tertiary" size="medium">
                    Edit tags
                  </Button>
                </Flex>
                <Flex>
                  <TagGroup>
                    <Tag>Tag</Tag>
                    <Tag>Tagymctagface</Tag>
                    <Tag>Tagymctagface</Tag>
                    <Tag>Tag</Tag>
                    <Tag>Tag</Tag>
                  </TagGroup>
                </Flex>
              </Paper>

              <Paper padding={24} marginBottom="medium">
                <Flex justifyContent="space-between" marginBottom="large">
                  <Heading size="600">Feedback on Quinten</Heading>
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

                <Hr margin={[24, 0]} />

                <Box>
                  <Flex justifyContent="space-between" marginBottom="medium">
                    <Entity name="Ava Gregoraci" secondary="Netflix" />
                    <Text size="extra-small">Added 12th June</Text>
                  </Flex>

                  <FeedbackHighlightRow title="Performance" rating={3} />

                  <p>
                    In the long history of humankind (and animal kind, too)
                    those who learned to collaborate and improvise most
                    effectively have prevailed.
                  </p>
                </Box>
              </Paper>
              <Paper padding={[24, 24, 40]}>
                <Flex justifyContent="space-between" marginBottom="medium">
                  <Heading size="600" icon="lock">
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
                <Heading size="600">About Quinten</Heading>
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
                <Heading size="600">Quintens experience</Heading>
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
  background-image: linear-gradient(to bottom, #2123ff, #4d399c);
  padding: 32px 0;
`;

const ProfileMain = styled.div`
  width: 100%;
  background-color: #fff;
`;

const ProfileAvatar = styled(Avatar)`
  top: -36px;
  position: relative;
  border: 4px solid #fff;
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
    <Box marginLeft={46} marginTop={8}>
      <span className="heading--500">{title}</span>
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
    <span className="heading--500">{title}</span>
    <StarRating score={rating} />
  </Flex>
);

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-gap: 16px;
`;
