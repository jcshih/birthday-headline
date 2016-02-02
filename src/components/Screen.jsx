import React, { PropTypes } from 'react';
import style from './Screen.css';
import HeadlineScreen from './HeadlineScreen.jsx';
import LoadingScreen from './LoadingScreen.jsx';

const Screen = (props) => {
  return (
    <div className={style.screen}>
      {props.isFetching ?
       <LoadingScreen/> :
       <HeadlineScreen headlineUrl={props.headlineUrl}/>}
    </div>
  );
};

Screen.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

export default Screen;
