import React from 'react';
import style from './LoadingScreen.css';

const LoadingScreen = (props) => {
  return (
    <div className={style.loadingScreen}>
      <div className={style.loaderWrapper}>
        <div className={style.loader}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
