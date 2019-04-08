import styled from 'react-emotion';
import {makePrimitive} from './utils';

/**
 * Layout primitives
 */

export const Box = styled(
  makePrimitive('Box', 'div', {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexShrink: 0,
    alignContent: 'flex-start',
    display: 'flex',
  })
)();
Box.displayName = 'Box';

export const Flex = styled(makePrimitive('Flex', 'div', {display: 'flex'}))();
Flex.displayName = 'Flex';

export const Block = styled(
  makePrimitive('Block', 'div', {display: 'block'})
)();
Block.displayName = 'Block';

export const Inline = styled(
  makePrimitive('Inline', 'span', {
    display: 'inline-block',
    verticalAlign: 'bottom',
  })
)();
Inline.displayName = 'Inline';

export const InlineFlex = styled(
  makePrimitive('InlineFlex', 'span', {display: 'inline-flex'})
)();
InlineFlex.displayName = 'InlineFlex';

/**
 * All of our html primitives should follow here so our api is consistent to the very root
 * Eg. Button, Input, Select, Table etc.
 */

export const A = styled(makePrimitive('A', 'a', {display: 'inline-flex'}))();
A.displayName = 'A';

/**
 * This is an empty component that provides backwards compatibility as we phase out the
 * layout primivites above. Its sole purpose is is to convert inline styles props in to
 * actual CSS.
 */

export const UIBase = styled(makePrimitive('UIBase', 'div'))();
UIBase.displayName = 'UIBase';
