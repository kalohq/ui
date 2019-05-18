import {makePrimitive} from './utils';
import styles from './layout.react.css';
/**
 * Layout primitives
 */

export const Box = makePrimitive('Box', 'div', styles['ui-box']);
Box.displayName = 'Box';

export const Flex = makePrimitive('Flex', 'div', styles['ui-flex']);
Flex.displayName = 'Flex';

export const Block = makePrimitive('Block', 'div', styles['ui-block']);
Block.displayName = 'Block';

export const Inline = makePrimitive('Inline', 'span', styles['ui-inline']);
Inline.displayName = 'Inline';

export const InlineFlex = makePrimitive(
  'InlineFlex',
  'span',
  styles['ui-inline-flex']
);
InlineFlex.displayName = 'InlineFlex';

/**
 * All of our html primitives should follow here so our api is consistent to the very root
 * Eg. Button, Input, Select, Table etc.
 */

export const A = makePrimitive('A', 'a', styles['ui-a']);
A.displayName = 'A';

/**
 * This is an empty component that provides backwards compatibility as we phase out the
 * layout primivites above. Its sole purpose is is to convert inline styles props in to
 * actual CSS.
 */

export const UIBase = makePrimitive('UIBase', 'div');
UIBase.displayName = 'UIBase';
