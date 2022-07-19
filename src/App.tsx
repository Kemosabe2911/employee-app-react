import React from "react";
import { Provider } from "react-redux";

import store from "store/store";
import PrivateLayout from "routes/PrivateLayout";
import {HashRouter as Router} from 'react-router-dom';
import "styles/global.css";



function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <PrivateLayout/>
      </Router>
    </Provider>
  );
}

export default App;
