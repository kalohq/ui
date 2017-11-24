import {graphql} from 'react-apollo';
import withData from '../hocs/withData';

export {default as gql} from 'graphql-tag';

export default function withQueries(queries, options) {
  return Component => withData(graphql(queries, options)(Component));
}
