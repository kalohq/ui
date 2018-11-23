import React from 'react';

import DropMenu, {DropMenuItem} from '../';
import Button from '../../button';

export const examples = [
  {
    title: 'DropMenu',
    render: () => (
      <DemoDropMenu>
        <DropMenu sticky={{width: '300px'}}>
          <DropMenuItem>Assign to task</DropMenuItem>
          <DropMenuItem>Assign to new category</DropMenuItem>
          <DropMenuItem>Remove from index</DropMenuItem>
        </DropMenu>
      </DemoDropMenu>
    ),
    html: () => (
      <div className="ui-drop-menu">
        <div className="ui-drop-menu__item">
          <span>Assign to task</span>
        </div>
        <div className="ui-drop-menu__item">
          <span>Assign to new category</span>
        </div>
        <div className="ui-drop-menu__item">
          <span>Remove from index</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Menu items with icons',
    render: () => (
      <DemoDropMenu>
        <DropMenu sticky={{width: '300px'}}>
          <DropMenuItem icon="info_outline">Assign to task</DropMenuItem>
          <DropMenuItem icon="add">Assign to new category</DropMenuItem>
          <DropMenuItem icon="remove_circle">Remove from index</DropMenuItem>
        </DropMenu>
      </DemoDropMenu>
    ),
    html: () => (
      <div className="ui-drop-menu">
        <div className="ui-drop-menu__item">
          <svg width={16} height={16} aria-hidden="true" fill="currentColor">
            <use xlinkHref="#info_outline" />
          </svg>
          Assign to task
        </div>
        <div className="ui-drop-menu__item">
          <svg width={16} height={16} aria-hidden="true" fill="currentColor">
            <use xlinkHref="#add" />
          </svg>
          <span>Assign to new category</span>
        </div>
        <div className="ui-drop-menu__item">
          <svg width={16} height={16} aria-hidden="true" fill="currentColor">
            <use xlinkHref="#remove_circle" />
          </svg>
          <span>Remove from index</span>
        </div>
      </div>
    ),
  },
  {
    title: 'DropMenu with sub items',
    render: () => (
      <DemoDropMenu>
        <DropMenu sticky={{width: '300px'}}>
          <DropMenuItem>Assign to category</DropMenuItem>
          <DropMenuItem isSubItem={true}>Engineers</DropMenuItem>
          <DropMenuItem isSubItem={true}>Designers</DropMenuItem>
          <DropMenuItem isSubItem={true} isHighlighted={true}>
            Photographers
          </DropMenuItem>
        </DropMenu>
      </DemoDropMenu>
    ),
    html: () => (
      <div className="ui-drop-menu">
        <div className="ui-drop-menu__item ui-drop-menu__item--static">
          <svg width={16} height={16} aria-hidden="true" fill="currentColor">
            <use xlinkHref="#chevron_left" />
          </svg>
          Assign to category
        </div>
        <div className="ui-drop-menu__item ui-drop-menu__item--sub-item">
          <span>Engineers</span>
        </div>
        <div className="ui-drop-menu__item ui-drop-menu__item--sub-item">
          <span>Designers</span>
        </div>
        <div className="ui-drop-menu__item ui-drop-menu__item--sub-item ui-drop-menu__item--highlighted">
          <span>Photographers</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Truncation',
    render: () => (
      <DemoDropMenu>
        <DropMenu sticky={{width: '300px'}}>
          <DropMenuItem icon="chevron_left">
            A really long title that should be truncated
          </DropMenuItem>
          <DropMenuItem isSubItem={true}>
            A really long title that should be truncated
          </DropMenuItem>
        </DropMenu>
      </DemoDropMenu>
    ),
    html: () => (
      <div className="ui-drop-menu">
        <div className="ui-drop-menu__item">
          <svg width={16} height={16} aria-hidden="true" fill="currentColor">
            <use xlinkHref="#chevron_left" />
          </svg>
          <span>A really long title that should be truncated</span>
        </div>
        <div className="ui-drop-menu__item ui-drop-menu__item--sub-item">
          <span>A really long title that should be truncated</span>
        </div>
      </div>
    ),
  },
  {
    title: 'DropMenu with link items',
    render: () => (
      <DemoDropMenu>
        <DropMenu sticky={{width: '300px'}}>
          <DropMenuItem>This is not a link</DropMenuItem>
          <DropMenuItem
            component="a"
            href="http://kalohq.com"
            target="_blank"
            title="As a link"
          >
            But this is! 😮🎉
          </DropMenuItem>
        </DropMenu>
      </DemoDropMenu>
    ),
    html: () => (
      <div className="ui-drop-menu">
        <div className="ui-drop-menu__item">
          <span>This is not a link</span>
        </div>
        <a
          href="https://kalohq.com"
          target="_blank"
          className="ui-drop-menu__item"
        >
          <span>But this is! 😮🎉</span>
        </a>
      </div>
    ),
  },
];

export class DemoDropMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false,
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div>
        <Button size="large" variant="tertiary" onClick={this.toggle}>
          Toggle dropdown
        </Button>
        {React.cloneElement(this.props.children, {
          open: this.state.open,
          onRequestClose: this.toggle,
        })}
      </div>
    );
  }
}
