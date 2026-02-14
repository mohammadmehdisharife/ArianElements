import React from 'react';
import styles from "./App.module.scss"
import Btn from './components/btn/Btn';

const App = () => {
  return (
    <div className={styles.container} >
      <Btn variant='primary' color='blue' >دکمه پرایمری</Btn>
      <Btn variant='secondary' color='blue' >دکمه سکنتری</Btn>
    </div>
  );
}

export default App;
