/* eslint-env jest */
/* eslint-disable no-var, no-console, func-names, global-require */

// This gets run before each test run

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});
