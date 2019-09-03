import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Wrappers
import PageWrapper from './components/PageWrapper';
import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Contact from './components/pages/Contact';

// admin pages
import Dashboard from './components/pages/Admin/Dashboard';
import Users from './components/pages/Admin/Users';
import Post from './components/pages/Admin/Post';
import AddPost from './components/pages/Admin/AddPost';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>

          <Route
            path='/admin/users'
            render={props => {
              console.log("Props", props);
              return (
                <div>
                  {
                    this.props.auth.token ?
                      <AdminWrapper>
                        <Users />
                      </AdminWrapper>
                      :
                      <LoginWrapper>
                        <Login {...props} />
                      </LoginWrapper>

                  }
                </div>
              )
            }}
          />

          <Route
            path="/admin/post/:view/:id"
            exact={true}
            render={props => {
              console.log("Props", props);
              return (
                <div>
                  {
                    this.props.auth.token ?
                      <AdminWrapper>
                        <AddPost />
                      </AdminWrapper>
                      :
                      <LoginWrapper>
                        <Login {...props} />
                      </LoginWrapper>

                  }
                </div>
              )
            }}
          />

          <Route
            path="/admin/post/:view"
            exact={true}
            render={props => {
              console.log("Props", props);
              return (
                <div>
                  {
                    this.props.auth.token ?
                      <AdminWrapper>
                        <AddPost />
                      </AdminWrapper>
                      :
                      <LoginWrapper>
                        <Login {...props} />
                      </LoginWrapper>

                  }
                </div>
              )
            }}
          />

          <Route
            path='/admin/post'
            exact={true}
            render={props => {
              console.log("Props", props);
              return (
                <div>
                  {
                    this.props.auth.token ?
                      <AdminWrapper>
                        <Post />
                      </AdminWrapper>
                      :
                      <LoginWrapper>
                        <Login {...props} />
                      </LoginWrapper>

                  }
                </div>
              )
            }}
          />

          <Route
            exact={true}
            path="/admin"
            render={props => {
              console.log("Props", props);
              return (
                <div>
                  {this.props.auth.token ?
                    <AdminWrapper>
                      <Dashboard />
                    </AdminWrapper>
                    :
                    <LoginWrapper>
                      <Login {...props} />
                    </LoginWrapper>
                  }
                </div>
              )
            }}
          />

          <Route
            exact={true}
            path="/"
            render={props => (
              <PageWrapper>
                <Home {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/about"
            render={props => (
              <PageWrapper>
                <About {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/contact"
            render={props => (
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

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
