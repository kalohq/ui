import * as React from 'react';
import {toPairs} from 'lodash';

import MarkdownContent from '../components/markdown-content';

import * as Stories from '../data/stories.js';

export default class ComponentDocumentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: false,
    };
  }

  async componentDidUpdate(prevProps) {
    if (
      prevProps.data.loading &&
      !this.props.data.loading &&
      this.props.data.component
    ) {
      const load = Stories[this.props.data.component.name];
      if (load) {
        const stories = await load;
        this.setState({stories: toPairs(stories)}); // eslint-disable-line react/no-did-update-set-state
      }
    }
  }

  render() {
    const {data} = this.props;
    const {markdownRemark: component} = data;
    const {stories} = this.state;

    console.log(stories);
    return (
      <div>
        <MarkdownContent dangerouslySetInnerHTML={{__html: component.html}} />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query ComponentByPath($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      excerpt
      timeToRead
    }
  }
`;
