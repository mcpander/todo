import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import ToDo from './components/ToDo';

import './style/index.css';

// initialize
const root = document.getElementById('todos');
const component = (
  <ToDo/>
);

// Needed for MUI onTouchTap
injectTapEventPlugin();

render((
  <Provider store={store}>
    {component}
  </Provider>
), root);

