import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, CocktailList, CocktailDetails } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list/:letter" component={CocktailList} />
        <Route path="/list/:letter/:id" component={CocktailDetails} />
      </Switch>
    </Router>
  );
}

export default App;
