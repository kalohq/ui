import React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {Inline, Flex} from 'components/layout';
import Node from './node';
import Text from 'components/text';
import H1 from 'components/h1';
import H3 from 'components/h3';
import IconSymbols from 'components/icon-symbols';

import theme from 'components/theme';

export default function(renderStory) {
  let story = renderStory();

  let meta = story.props;
  return (
    <ThemeProvider theme={theme}>
      <Flex
        flexDirection="column"
        padding={50}
        style={{backgroundColor: '#fff'}}
      >
        <H1 size="extra-large">{meta.context.story}</H1>
        <Text multiline={true}>{meta.info}</Text>
        <Inline
          style={{border: '1px solid #eceff1'}}
          padding={[20]}
          marginTop={20}
        >
          <H3 marginBottom={10}>Example</H3>
          <Inline>{story}</Inline>
        </Inline>

        <Inline
          style={{border: '1px solid #eceff1', backgroundColor: '#f9fafc'}}
          padding={[20]}
          marginTop={20}
        >
          <H3 marginBottom={10}>Source Code</H3>
          <Inline>
            <pre>
              {React.Children.map(story.props.children, (root, idx) => (
                <Node key={idx} depth={0} node={root} />
              ))}
            </pre>
          </Inline>
        </Inline>
        <IconSymbols />
      </Flex>
    </ThemeProvider>
  );
}
