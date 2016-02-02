import React from 'react';
import style from './HeadlineScreen.css';

const HeadlineScreen = (props) => {
  return (
    <div className={style.headlineScreen}>
      {props.headlineUrl ?
       <div className={style.headline}><img src={props.headlineUrl}/></div> :
       null}
    </div>
  );
};

export default HeadlineScreen;
