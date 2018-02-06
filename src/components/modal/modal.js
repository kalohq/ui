/* @flow */
import React from 'react';
import styled from 'react-emotion';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Portal from '../portal';

import {Box} from '../layout';
import Icon from '../icon';
import H2 from '../h2';

import CONSTANTS from '../../design-tokens/tokens';

const StyledModalContainer = styled(Box)`
  flex-direction: column;
  z-index: 50;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(55, 69, 97, 0.94);
  overflow: auto;

  @media screen and (max-width: 991px) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
}

`;

const StyledModalClose = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
  color: ${props => props.theme.colors.grey500};
  transition: all 60ms ease-in-out;
  width: 36px;
  height: 36px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${props => props.theme.colors.navy600};
    background-color: ${props => props.theme.colors.grey300};
  }
`;

const StyledModal = styled(Box)`
  margin: 48px 0 300px;
  width: 100%;
  max-width: 620px;
  overflow: hidden;
  cursor: default;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.layout.borderRadius};

  @media screen and (max-width: 991px) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0;
  }
`;

const StyledModalHeader = styled(Box)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.grey300};
  padding: 0 32px;
  min-height: 88px;
`;

export const ModalBody = styled(Box)`
  padding: 32px;
  background-color: ${props =>
    props.subdued ? props.theme.colors.grey200 : props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.grey300};
`;

ModalBody.displayName = 'ModalBody';

export const ModalActions = styled(Box)`
  padding: 32px;
  background-color: ${props => props.theme.colors.white};
  justify-content: center;
  flex: 1;
`;

ModalActions.displayName = 'ModalActions';

/**
 * Generic modal popup
 */

type TProps = {
  children?: React$Node,
  /** Is the modal open? */
  open: boolean,
  /** Allows the modal to be dismissed by clicking outside */
  closeOnOverlayClick?: boolean,
  onCloseRequest?: boolean,
  /** A custom z-index value */
  zIndex?: number,
  /** A title to be displayed at the top of the modal */
  title?: string,
};

export default function Modal(props: TProps) {
  const {
    onCloseRequest,
    children,
    closeOnOverlayClick = true,
    zIndex = CONSTANTS.zIndexDialog,
    open = true,
    title,
  } = props;

  const overlayCanClose = closeOnOverlayClick && onCloseRequest;

  return open ? (
    <Portal>
      <StyledModalContainer
        overlayCanClose={overlayCanClose}
        onClick={overlayCanClose ? onCloseRequest : undefined}
        style={{zIndex}}
      >
        <ReactCSSTransitionGroup
          transitionName="t-slide"
          transitionAppear={true}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={300}
        >
          <StyledModal
            onClick={event => event.stopPropagation()}
            zIndex={zIndex}
          >
            <StyledModalHeader
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              {...props}
            >
              <H2>{title}</H2>
              {onCloseRequest ? (
                <Box marginLeft="auto">
                  <StyledModalClose onClick={onCloseRequest} type="button">
                    <Icon color="navy600" size={24}>
                      clear
                    </Icon>
                  </StyledModalClose>
                </Box>
              ) : null}
            </StyledModalHeader>
            {children}
          </StyledModal>
        </ReactCSSTransitionGroup>
      </StyledModalContainer>
    </Portal>
  ) : null;
}
