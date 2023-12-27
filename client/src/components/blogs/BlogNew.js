import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import BlogForm from './BlogForm';
import BlogFormReview from './BlogFormReview';

class BlogNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <BlogFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <BlogForm
        onBlogSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div style={styles.container}>
        {this.renderContent()}
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    marginTop: '70px',
  },
};

export default reduxForm({
  form: 'blogForm'
})(BlogNew);
