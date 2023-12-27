import React from 'react';

const Landing = () => {
  const styles = {
    landingContainer: {
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginTop: '100px',
    },
    landingTitle: {
      color: '#333',
      fontSize: '2em',
      marginBottom: '20px',
    },
    landingDescription: {
      color: '#555',
      fontSize: '1.2em',
      marginBottom: '30px',
    },
    customButton: {
      backgroundColor: '#4caf50',
      color: '#fff',
      padding: '15px 30px',
      fontSize: '1em',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };


  return (
    <div style={styles.landingContainer}>
      <h1 style={styles.landingTitle}>
        Welcome to Blogster!
      </h1>
      <p style={styles.landingDescription}>
        Explore and write private blogs tailored just for you.
      </p>
          <div>
            <a href={'/auth/google'}>Login With Google</a>
          </div>
  
      </div>
  );
};

export default Landing;
