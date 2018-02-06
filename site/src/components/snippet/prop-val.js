import * as React from 'react';

const valueStyles = {
  func: {
    color: '#859900',
  },

  attr: {
    color: '#586e75',
  },

  object: {
    color: '#586e75',
  },

  array: {
    color: '#586e75',
  },

  number: {
    color: '#cb4b16',
  },

  string: {
    color: '#2aa198',
    wordBreak: 'break-word',
  },

  bool: {
    color: '#a11',
  },

  empty: {
    color: '#777',
  },
};

const previewArray = val => {
  const items = {};
  val.slice(0, 3).forEach((item, i) => {
    items[`n${i}`] = <PropVal val={item} />;
    items[`c${i}`] = ', ';
  });
  if (val.length > 3) {
    items.last = '…';
  } else {
    delete items[`c${val.length - 1}`];
  }

  return (
    /** These spans should be replaced with fragments once Gatsby is
      * updated to React 16 */
    <span style={valueStyles.array}>
      [{Object.keys(items).map(item => <span key={item}>{items[item]}</span>)}]
    </span>
  );
};

const previewObject = val => {
  const names = Object.keys(val);
  const items = {};
  names.slice(0, 3).forEach((name, i) => {
    items[`k${i}`] = <span style={valueStyles.attr}>{name}</span>;
    items[`c${i}`] = ': ';
    items[`v${i}`] = <PropVal val={val[name]} />;
    items[`m${i}`] = ', ';
  });
  if (names.length > 3) {
    items.rest = '…';
  } else {
    delete items[`m${names.length - 1}`];
  }
  return (
    <span style={valueStyles.object}>
      {Object.keys(items).map(item => <span key={item}>{items[item]}</span>)}
    </span>
  );
};

const previewProp = val => {
  let braceWrap = true;
  let content = null;
  if (typeof val === 'number') {
    content = <span style={valueStyles.number}>{val}</span>;
  } else if (typeof val === 'string') {
    if (val.length > 50) {
      val = val.slice(0, 50) + '…';
    }
    content = <span style={valueStyles.string}>"{val}"</span>;
    braceWrap = false;
  } else if (typeof val === 'boolean') {
    content = <span style={valueStyles.bool}>{`${val}`}</span>;
  } else if (Array.isArray(val)) {
    content = previewArray(val);
  } else if (typeof val === 'function') {
    content = (
      <span style={valueStyles.func}>
        {val.name ? `${val.name}()` : 'anonymous()'}
      </span>
    );
  } else if (!val) {
    content = <span style={valueStyles.empty}>{`${val}`}</span>;
  } else if (typeof val !== 'object') {
    content = <span>…</span>;
  } else if (React.isValidElement(val)) {
    content = (
      <span style={valueStyles.object}>
        {`<${val.type.displayName || val.type.name || val.type} />`}
      </span>
    );
  } else {
    content = previewObject(val);
  }

  if (!braceWrap) return content;
  return <span>&#123;{content}&#125;</span>;
};

export default class PropVal extends React.Component {
  render() {
    return previewProp(this.props.val);
  }
}

module.exports = PropVal;
