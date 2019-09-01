import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import AdminWrapper from './components/AdminWrapper';

// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Contact from './components/pages/Contact'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          
          <Route
            path="/admin"
            render= {props => (
              <AdminWrapper>
                <Login {...props} />
              </AdminWrapper>
            )}
          />


            <Route
              exact={true}
              path="/"
              render= {props => (
                <PageWrapper>
                  <Home {...props} />
                </PageWrapper>
              )}
            />
            <Route
              path="/about"
              render= {props => (
                <PageWrapper>
                  <About {...props} />
                </PageWrapper>
              )}
            />
            <Route
              path="/contact"
              render= {props => (
                <PageWrapper>
                  <Contact {...props} />
                </PageWrapper>
              )}
            />

        </Router>
      </div>
    );
  }
}

export default App;
