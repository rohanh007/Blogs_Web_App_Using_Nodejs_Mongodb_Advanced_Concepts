
// import React from 'react';

// export default ({ input, label, meta: { error, touched } }) => {
//   return (
//     <div className={`form-field ${input.name}`}>
//       <label className="form-label">{label}</label>
//       <input {...input} className="form-input" />
//       <div className="error-message">
//         {touched && error && <span className="error-text">{error}</span>}
//       </div>
//     </div>
//   );
// };

// YourComponent.js

import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div style={{ marginBottom: '20px' }} className={`form-field ${input.name}`}>
      <label style={labelStyle}>{label}</label>
      <input style={inputStyle} {...input} />
      <div style={errorStyle}>
        {touched && error && <span style={errorTextStyle}>{error}</span>}
      </div>
    </div>
  );
};

// Inline styles
const labelStyle = {
  display: 'block',
  fontSize: '16px',
  marginBottom: '5px',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const errorStyle = {
  marginTop: '5px',
};

const errorTextStyle = {
  color: '#d9534f',
  fontSize: '14px',
  display: 'block',
};


