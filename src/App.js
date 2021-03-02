import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// import { createBrowserHistory as createHistory } from 'history';
import routes from './constants/routes';
// import 'antd/dist/antd.css';




const App = () => {
  return (

      <Router>
        <div className='App'>
          <Switch>
            {Object.values(routes).map((route) => (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </Router>

  );
}

export default App;
