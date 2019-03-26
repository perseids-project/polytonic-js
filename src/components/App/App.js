import React from 'react';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Input from '../Input';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <React.Fragment>
      <PerseidsHeader>
        Greek Polytonic Keyboard
      </PerseidsHeader>
      <main role="main">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Input} />
          </Switch>
        </div>
      </main>
      <PerseidsFooter
        report="https://github.com/perseids-project/polytonic-js"
        github="https://github.com/perseids-project/polytonic-js/issues"
      />
    </React.Fragment>
  </Router>
);

export default App;
