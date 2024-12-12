import React from 'react';
import styles from "./Login.module.css";

function Login() {
  return (
    <div>
        <div className={styles.main}>
        <div className={styles.container}>
        <div className={styles.top}>
        <img className={styles.topImg} src="/login.png" alt="image"/>
        </div>
        <div className={styles.bottom}>
        <img className={styles.logo} src="/logo.png" alt="logo"/>
        <button className={styles.btn} onClick="">
        <span><img src="/google.png" alt="googleicon"></img></span>
        Continue with google</button>
         </div>
        </div>
        </div>
      
    </div>
  )
}

export default Login
