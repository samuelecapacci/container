import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './components/about/About.js';
import Contacts from './components/contacts/Contacts.js';
import Home from './components/home/Home.js';
import './css/App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </Router>
    );
  }
}

export default App;
