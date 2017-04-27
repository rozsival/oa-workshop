import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <App />,
  root
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    ReactDOM.render(
      <NextApp />,
      root
    );
  });
}
