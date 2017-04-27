import {configure, setAddon, addDecorator} from '@kadira/storybook';
import {setOptions} from '@kadira/storybook-addon-options';
import infoAddon from '@kadira/react-storybook-addon-info';
import addStoriesGroup from 'react-storybook-addon-add-stories-group'
import centered from './view/decorator-centered'

import 'styles/master.css';

const path = require('path');
const req = require.context('../src', true, /stories\.js$/)

setOptions({
  name: 'Lystable Components',
  url: 'https://lystable.com',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
});

setAddon(infoAddon);
setAddon(addStoriesGroup);
addDecorator(centered);

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
