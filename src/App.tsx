import React from 'react';
import { Provider } from 'react-redux';

import store from 'store/store';
import { HashRouter as Router } from 'react-router-dom';
import 'styles/global.css';
import Layout from 'Layout';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Layout/>
      </Router>
    </Provider>
  );

}

export default App;
