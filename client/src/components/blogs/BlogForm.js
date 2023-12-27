// // BlogForm shows a form for a user to add input
// import _ from 'lodash';
// import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form';
// import { Link } from 'react-router-dom';
// import BlogField from './BlogField';
// import formFields from './formFields';

// class BlogForm extends Component {
//   renderFields() {
//     return _.map(formFields, ({ label, name }) => {
//       return (
//         <Field
//           key={name}
//           component={BlogField}
//           type="text"
//           label={label}
//           name={name}
//         />
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.props.handleSubmit(this.props.onBlogSubmit)}>
//           {this.renderFields()}
//           <Link to="/blogs" className="red btn-flat white-text">
//             Cancel
//           </Link>
//           <button type="submit" className="teal btn-flat right white-text">
//             Next
//             <i className="material-icons right">done</i>
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// function validate(values) {
//   const errors = {};

//   _.each(formFields, ({ name }) => {
//     if (!values[name]) {
//       errors[name] = 'You must provide a value';
//     }
//   });

//   return errors;
// }

// export default reduxForm({
//   validate,
//   form: 'blogForm',
//   destroyOnUnmount: false
// })(BlogForm);

// BlogForm.js
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import BlogField from './BlogField';
import formFields from './formFields';

class BlogForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={BlogField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <form onSubmit={this.props.handleSubmit(this.props.onBlogSubmit)}>
          <div style={styles.formFieldsContainer}>{this.renderFields()}</div>
          <div style={styles.buttonContainer}>
            <Link to="/blogs" style={styles.cancelButton}>
              Cancel
            </Link>
            <button type="submit" style={styles.nextButton}>
              Next <i className="material-icons right">done</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    marginTop: '10px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  formFieldsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    paddingRight: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelButton: {
    padding: '10px 20px',
    fontSize: '16px',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    backgroundColor: '#d32f2f',
    color: '#fff',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  },
  nextButton: {
    padding: '10px 20px',
    fontSize: '16px',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    backgroundColor: '#00796b',
    color: '#fff',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  },
};

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'blogForm',
  destroyOnUnmount: false,
})(BlogForm);
