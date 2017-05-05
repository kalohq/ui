import {random} from 'lodash';

export default () => (
  `${
    random(0.0001, 0.9999).toString(36)
  }justsomebufferforpeaceofmind`.substr(2, 10)
);
