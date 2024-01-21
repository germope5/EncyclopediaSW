import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CharacterDetail from './pages/CharacterDetail.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/characters/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
};

export default App;
