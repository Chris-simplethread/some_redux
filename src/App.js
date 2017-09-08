import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route,
       } from 'react-router-dom';
import MainNavContainer from './components/MainNav/MainNavContainer';
import ToDoContainer from './components/ToDo/ToDoContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavContainer users={['Chris', 'Bob', 'Joe']} />
        <ToDoContainer />
        <Router>
          <Route exact path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
