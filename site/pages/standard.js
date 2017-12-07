import React from 'react';
import PureComponent from 'react-pure-render/component';
import {find} from 'lodash';

import Documentation from 'layouts/documentation';

const routes = [
  {
    title: 'Brand colors',
    category: 'brand',
    page: 'color',
  },
  {
    title: 'Brand Typography',
    category: 'brand',
    page: 'typography',
  },
];

export default class Standard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      routes,
    };
  }

  componentWillMount() {
    const reqCategory = this.props.url.query.category;
    const reqPage = this.props.url.query.page;

    const page = find(this.state.routes, ['page', reqPage]);

    console.log(page);

    if (page) {
      this.setState({
        page,
      });
    }
  }

  render() {
    return <Documentation>Lorem ipsum dolar sit amet..</Documentation>;
  }
}
