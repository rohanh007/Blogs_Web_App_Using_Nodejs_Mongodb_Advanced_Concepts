import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href={'/auth/google'} style={styles.authLink}>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="3" style={{ margin: '0 10px' }}>
            <Link to="/blogs" style={styles.navLink}>My Blogs</Link>
          </li>,
          <li key="2">
            <a href={'/auth/logout'} style={styles.authLink}>Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav style={styles.navBar}>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/blogs' : '/'}
            className="left brand-logo"
            style={{ ...styles.brandLogo, marginLeft: '10px' }}
          >
            Blogster
          </Link>
          <ul className="right" style={styles.navList}>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const styles = {
  navBar: {
    backgroundColor: '#f21f77', 
  },
  brandLogo: {
    color: '#fff', 
    fontSize: '1.5em',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  navLink: {
    color: '#fff', 
    fontSize: '1em',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  authLink: {
    color: '#fff', 
    fontSize: '1em',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  navList: {
    display: 'flex',
    alignItems: 'center',
  },
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
