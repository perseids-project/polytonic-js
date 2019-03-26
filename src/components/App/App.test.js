import React from 'react';
import { render } from 'react-dom';

import App from './App';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  const keyboardDiv = window.document.createElement('div');

  keyboardDiv.className += 'react-simple-keyboard';
  document.body.appendChild(keyboardDiv);

  render(<App />, div);
});
