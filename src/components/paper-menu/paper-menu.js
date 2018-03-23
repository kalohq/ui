/* @flow */
import * as React from 'react';
import styled from 'react-emotion';

import PureComponent from 'react-pure-render/component';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import H3 from '../h3';
import Icon from '../icon';
import Paper from '../paper';
import Sticky from '../sticky';

const StyledPaperMenu = styled.div`
  transform-origin: top;
  transition: box-shadow 0.2s linear;
  transition-duration: 0.2s !important;
`;

const StyledPaperMenuHeader = styled.div`
  display: flex;
  padding: 32px 32px 16px 32px;
  justify-content: space-between;
`;

const StyledPaperMenuOption = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -6px;
`;

const StyledPaperMenuOptionClose = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

/**
 * Generic open/close popup paper styled menu
 */

type Props = {
  offset?: {
    x?: number,
    y?: number,
  },
  children?: React.Node,
  open?: boolean,
  origin?: string,
  root?: Object,
  paper?: Object,
  onRequestClose?: Function,
  heading?: string,
  optionsIcon?: React.Node,
  closeOnOutsideClick?: boolean,
  sticky?: Object,
  zIndex?: number,
  anchor?: string,
};

export default class PaperMenu extends PureComponent {
  onWindowClick: Function;

  static defaultProps = {
    children: '',
    origin: 'top left',
    open: false,
    anchor: 'bottom',
    zIndex: 100,
    paper: {
      rounded: true,
      elevation: 2,
      hoverElevation: 2,
    },
    closeOnOutsideClick: true,
  };

  constructor(props: Props) {
    super();

    this.onWindowClick = this.onWindowClick.bind(this);

    if (props.open) {
      window.addEventListener('click', this.onWindowClick);
    }
  }

  componentWillReceiveProps(newProps: Props) {
    // We only bind a window click event handler while the menu is open.
    // We also wait for the animation to finish. This means that multiple
    // paper menu’s will not stay open at the same time.
    if (newProps.open && !this.props.open) {
      setTimeout(
        () => window.addEventListener('click', this.onWindowClick),
        300
      );
    }
    if (!newProps.open && this.props.open) {
      window.removeEventListener('click', this.onWindowClick);
    }
  }

  onWindowClick(event: SyntheticEvent<*>) {
    if (
      this.props.open &&
      this.props.closeOnOutsideClick &&
      this.props.onRequestClose
    ) {
      this.props.onRequestClose(event);
    }
  }

  render() {
    const {
      open,
      children,
      origin,
      paper,
      root,
      heading,
      anchor,
      offset,
      zIndex,
      sticky,
      optionIcons,
    } = this.props;

    return (
      <Sticky anchor={anchor} offset={offset} zIndex={zIndex} {...sticky}>
        <CSSTransitionGroup
          transitionName="t-scale"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={300}
        >
          {open ? (
            <StyledPaperMenu
              {...root}
              style={{transformOrigin: origin}}
              onClick={event => event.stopPropagation()}
            >
              <Paper {...paper}>
                {heading && (
                  <StyledPaperMenuHeader>
                    <H3>{heading}</H3>
                    <StyledPaperMenuOption>
                      {optionIcons}
                      <StyledPaperMenuOptionClose
                        onClick={this.props.onRequestClose}
                      >
                        <Icon size={18}>clear</Icon>
                      </StyledPaperMenuOptionClose>
                    </StyledPaperMenuOption>
                  </StyledPaperMenuHeader>
                )}
                {children}
              </Paper>
            </StyledPaperMenu>
          ) : null}
        </CSSTransitionGroup>
      </Sticky>
    );
  }
}
