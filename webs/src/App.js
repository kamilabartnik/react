import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <PageWrapper>
            <Route
              exact={true}
              path="/"
              component={Home}
            />
            <Route
              path="/about"
              component={About}
            />
            <Route
              path="/contact"
              component={Contact}
            />

          </PageWrapper>
        </Router>
      </div>
    );
  }
}

export default App;
