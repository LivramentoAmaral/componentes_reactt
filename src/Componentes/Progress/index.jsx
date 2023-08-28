import React from 'react';
import styles from './Progress.module.css';


const progressPercentage = 60; 

function Progress(){
  
  return (
    
    <div className={styles.progressContainer}>
      <div className={styles.progressBar} style={{ width: `${progressPercentage}%` }}></div>
    </div>
  );
};


export default Progress;
