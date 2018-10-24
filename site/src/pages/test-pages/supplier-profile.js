import React from 'react';
import styled, {css} from 'react-emotion';

import {
  Button,
  Paper,
  StarRating,
  Icon,
  Grid,
  Row,
  Column,
  UIBase,
  Flex,
  Box,
  ButtonGroup,
  Heading,
  Text,
} from '../../../../src/components';

export default () => (
  <div>
    <MockedSideNavigation />
    <div css={{paddingBottom: 120}}>
      <ProfileHeader>
        <Grid padding={[0, 32]}>
          <Row>
            <Column columns={12}>
              <Flex justifyContent="flex-end">
                <Button variant="tertiary">Change image</Button>
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
              <Row marginBottom={16}>
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
              <Row marginBottom={16}>
                <Column columns={12}>
                  <span>London, UK</span>
                  <span>quinten.kortum@example.com</span>
                </Column>
              </Row>
              <Row>
                <Column columns={12}>
                  <SkillTag>Skill one</SkillTag>
                  <SkillTag>Skill one</SkillTag>
                  <SkillTag>Skill one</SkillTag>
                  <SkillTag>A longer skill</SkillTag>
                  <SkillTag>Yet another skill</SkillTag>
                  <StarRating score={3} marginTop={24} />
                </Column>
              </Row>
            </Box>
          </Flex>
        </Grid>

        <Grid padding={[0, 32]}>
          <Row>
            <Column columns={12}>
              <TabNavigation marginBottom={32} marginTop={16}>
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
              <Paper padding={24} marginBottom={16}>
                <Flex justifyContent="space-between" marginBottom={16}>
                  <Heading size="600">Netflix tags</Heading>
                  <Button variant="tertiary" size="medium">
                    Edit tags
                  </Button>
                </Flex>
              </Paper>

              <Paper padding={24} marginBottom={16}>
                <Flex justifyContent="space-between" marginBottom={16}>
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

                <Box>
                  <Flex justifyContent="space-between">
                    <Entity name="Ava Gregoraci" secondary="Netflix" />
                    <span>Added 12th June</span>
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
                <Flex justifyContent="space-between" marginBottom={16}>
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
                <Text>
                  Some general information that Quinten has written about how
                  great she is MAX characters. Can go onto three lines but no
                  more copy copy.
                </Text>
                <Text>
                  <Icon size={18}>phone</Icon>01324 434 4343
                </Text>
                <Text>
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
  </div>
);

const MockedSideNavigation = styled.div`
  width: 62px;
  height: 100vh;
  background-color: ${props => props.theme.colors.navy700};
  position: absolute;
  left: 0;
  top: 0;
  display: none;
`;

const ProfileHeader = styled.div`
  width: 100%;
  height: 240px;
  background-color: ${props => props.theme.colors.grey500};
  padding: 32px 0;
`;

const ProfileMain = styled.div`
  width: 100%;
  background-color: #fff;
`;

const Avatar = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.theme.colors.purple400};
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 50%;
`;

const ProfileAvatar = styled(Avatar)`
  top: -36px;
  position: relative;
  border: 4px solid #fff;
`;

const TabNavigation = styled(UIBase)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 52px;
  border-bottom: 1px solid ${props => props.theme.colors.grey300};
`;

const TabNavigationTab = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.navy600};
  padding: 16px 8px;

  ${props =>
    props.isSelected &&
    css`
      border-bottom: 2px solid ${props.theme.colors.purple500};
    `};
`;

const SkillTag = styled.span`
  display: inline-flex;
  border: 1px solid ${props => props.theme.colors.grey400};
  color: ${props => props.theme.colors.navy600};
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 30px;
  font-size: 12px;
`;

const Lozenge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
  padding: 0 8px;
  height: 24px;
`;

const NewLozenge = styled(Lozenge)`
  border: 1px solid ${props => props.theme.colors.grey300};
  background-color: ${props => props.theme.colors.grey200};
  color: ${props => props.theme.colors.grey600};
`;

const AvailableLozenge = styled(Lozenge)`
  background-color: ${props => props.theme.colors.green300};
  color: ${props => props.theme.colors.green600};
`;

const StyledEntity = styled.div`
  display: flex;
  align-items: center;
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

const Entity = ({name, secondary, avatarSrc}) => (
  <StyledEntity>
    <Avatar size={36} src={avatarSrc} />
    <Box marginLeft={8}>
      <span className="heading--500">{name}</span>
      <span className="text--helper">{secondary}</span>
    </Box>
  </StyledEntity>
);

const FeedbackHighlightRow = ({title, rating}) => (
  <Flex justifyContent="space-between">
    <span className="heading--500">{title}</span>
    <StarRating score={rating} />
  </Flex>
);

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-gap: 16px;
`;
