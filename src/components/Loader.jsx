import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

const Loader = () => {
  
  return (
    <div className="loader-container" style={styles.loaderContainer}>
      <PuffLoader
        color={"#007bff"}
        size={100}
      />
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
};

export default Loader;





