import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {parseStyleProps} from 'utils/style';
import styles from './list.css';

import PureComponent from 'react-pure-render/component';

export default class List extends PureComponent {
  static propTypes = {
    children: PropTypes.iterable,
    type: PropTypes.oneOf([
      'horizontal',
      'vertical',
      'grid',
      'horizontal-flex',
      'vertical-flex',
      'horizontal-fit',
    ]).isRequired,
    multiline: PropTypes.bool, // use horizontal
    wrap: PropTypes.bool,
    spaced: PropTypes.oneOf([
      'small',
      'medium',
      'medium-right',
      'extra-medium',
      'large',
      'none',
    ]),
    columns: PropTypes.number,
    columnsFixed: PropTypes.bool,
    transition: PropTypes.shape({
      name: PropTypes.string,
      appear: PropTypes.bool,
      timeout: PropTypes.number,
      enterTimeout: PropTypes.number,
      leaveTimeout: PropTypes.number,
      appearTimeout: PropTypes.number,
    }),
    justify: PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
    ]),
  };

  static defaultProps = {
    type: 'vertical',
    wrap: false,
    children: [],
    columnsFixed: true,
    multiline: false, // use with horizontal
  };

  render() {
    const {
      type,
      children,
      wrap,
      spaced,
      columns,
      transition,
      columnsFixed,
      multiline,
      justify,
    } = this.props;
    const columnWidth = `${100 / columns}%`;
    const columnStyle = columns
      ? parseStyleProps({
          minWidth: columnsFixed ? columnWidth : undefined,
          maxWidth: columnWidth,
          flex: columnsFixed ? `1 1 ${columnWidth}` : '1 1 100%',
        }).style
      : null;

    const isMultiline = multiline && type === 'horizontal';

    // wrap children in list items
    const finalChildren = React.Children.map(
      children,
      (child, index) =>
        child
          ? <li
              style={columnStyle}
              key={child.key || index}
              className={cx({
                [styles.item]: true,
                [styles[`item-${type}`]]: true,
                [styles[`item-spaced-${spaced}`]]: !!spaced,
                [styles['item-horizontal-multiline']]: isMultiline,
                [styles[`item-multiline-spaced-${spaced}`]]: isMultiline
                  ? spaced
                  : false,
              })}
            >
              {child}
            </li>
          : null
    );

    const listClassName = cx({
      [styles.root]: true,
      [styles[type]]: true,
      [styles.wrap]: wrap,
      [styles.multiline]: isMultiline,
      [styles[`justify-${justify}`]]: !!justify,
    });

    if (transition) {
      const {timeout: defaultTimeout = 300} = transition;

      return (
        <ReactCSSTransitionGroup
          component="ul"
          className={listClassName}
          transitionName={transition.name}
          transitionAppear={transition.appear}
          transitionEnterTimeout={transition.enterTimeout || defaultTimeout}
          transitionLeaveTimeout={transition.leaveTimeout || defaultTimeout}
          transitionAppearTimeout={transition.appearTimeout || defaultTimeout}
        >
          {finalChildren}
        </ReactCSSTransitionGroup>
      );
    }

    return (
      <ul className={listClassName}>
        {finalChildren}
      </ul>
    );
  }
}
