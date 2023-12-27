import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import BlogNew from './blogs/BlogNew';
import BlogShow from './blogs/BlogShow';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div style={styles.appContainer}>
        <BrowserRouter>
          <div style={styles.contentContainer}>
            <Header />
            <Switch>
              <Route path="/blogs/new" component={BlogNew} />
              <Route exact path="/blogs/:_id" component={BlogShow} />
              <Route path="/blogs" component={Dashboard} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentContainer: {
    maxWidth: '1200px',
    width: '100%',
    padding: '20px',
  },
};

export default connect(null, actions)(App);
