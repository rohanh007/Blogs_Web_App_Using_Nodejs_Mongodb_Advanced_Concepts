import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from './blogs/BlogList';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <BlogList />
      <div className="fixed-action-btn">
        <Link to="/blogs/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

export default Dashboard;
