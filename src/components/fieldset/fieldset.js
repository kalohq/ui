/* @flow */
import * as React from 'react';
import styled from 'react-emotion';
import {pickStyles} from '../../utils/style';

import {Box} from '../layout';
import FieldLabel from '../field-label';
import Text from '../text';

function FieldsetHeader(props: {
  legend: string,
  description?: string,
  meta?: string,
}) {
  const {legend, description, meta} = props;

  return (
    <Box marginTop={20}>
      {legend ? (
        <FieldLabel>
          {legend}
          {meta ? (
            <Text
              size="extra-small"
              color="silver"
              marginLeft={10}
              weight="normal"
              resetTransform={true}
              display="inline"
            >
              {meta}
            </Text>
          ) : null}
        </FieldLabel>
      ) : null}
      {description ? (
        <Text color="navy600" multiline={true}>
          {description}
        </Text>
      ) : null}
    </Box>
  );
}

const StyledFieldset = styled(Box)`
  border: 0;
  border-bottom: ${props =>
    props.bordered ? `1px solid ${props.theme.colors.grey300}` : null};
  background-color: ${props =>
    props.inset ? `${props.theme.colors.navy300}` : null};
  cursor: ${props => (props.interactive ? 'pointer' : 'inherit')};
`;

type TProps = {
  /** Fieldset children to display within the fieldset content area */
  children?: React.Node,
  /** Show fieldset as slightly inset into the form? Good for separation between fiedsets. */
  inset?: boolean,
  /** A heading for your legend */
  legend?: string,
  /** Provide further description to the user about this section (fieldset) */
  description?: string,
  /** Meta text to render next to fieldset legend text */
  legendMeta?: string,
  /** onClick passthrough */
  onClick?: Function,
  /** Will be set on the root element */
  name?: string,
  /** Class name to style your fieldset */
  className?: string | Array<string> | Object,
  /** Adds a bottom border */
  bordered?: boolean,
};

export default function Fieldset(props: TProps) {
  const {
    children,
    inset = false,
    legend,
    description,
    onClick,
    legendMeta,
    name,
    className,
    bordered = true,
    ...otherProps
  } = props;

  return (
    <StyledFieldset
      className={className}
      bordered={bordered}
      component="fieldset"
      inset={inset}
      interactive={!!onClick}
      onClick={onClick}
      padding={[20, 50, 40, 50]} // top -20 accounts forr vertical spacing
      name={name}
      {...pickStyles(otherProps)}
    >
      {legend ? (
        <FieldsetHeader
          meta={legendMeta}
          legend={legend}
          description={description}
        />
      ) : null}
      {children}
    </StyledFieldset>
  );
}
