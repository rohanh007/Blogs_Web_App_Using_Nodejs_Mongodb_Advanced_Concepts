import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';

class BlogShow extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params._id);
  }

  render() {
    if (!this.props.blog) {
      return '';
    }

    const { title, content } = this.props.blog;

    return (
      <div style={styles.container}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.content}>{content}</p>
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
  },
  title: {
    color: '#333',
    fontSize: '2em',
    marginBottom: '10px',
  },
  content: {
    color: '#555',
    fontSize: '1.2em',
    lineHeight: '1.6',
  },
};

function mapStateToProps({ blogs }, ownProps) {
  return { blog: blogs[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchBlog })(BlogShow);
