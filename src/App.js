import React from 'react';


import './components/MainHeader/MainHeader'
import MainHeader from './components/MainHeader/MainHeader';
import Webcam from './components/Webcam/templates/Webcam';


import styles from './App.module.css'
import Illustration from './components/MainIlustration/Illustration';
import Description from './components/Description/Description';

function App() {
  return (
    <div className={styles.app}>
      <MainHeader />
      <div className={styles.content}>
        <Description></Description>
        <Illustration></Illustration>
      </div>

    </div>
  );
}

export default App;
