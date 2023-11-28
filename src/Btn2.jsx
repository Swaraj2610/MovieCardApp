import React from "react";
import styles from './btn2.module.css';

class Btn2 extends React.Component {

    // arrow function create implicite binding 
    
    
      render() {
  return (
   <> 
   <button className={styles.btn2}>Submit2</button>
    </>
  );
}}

export default Btn2;