import React from 'react';
import '../styles/App.css';
import NavBar from './NavBar.js';
import { Switch, Route } from 'react-router-dom';
import Properties from './Properties';
import AddProperty from './AddProperty';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Properties className="properties"/>
        </Route>
        <Route exact path="/add-property">
          <AddProperty />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
