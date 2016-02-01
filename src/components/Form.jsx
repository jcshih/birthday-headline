import React, { PropTypes } from 'react';
import style from './Form.css';

const Form = (props) => {
  return (
    <div className={style.form}>
      <button onClick={props.handleGetHeadlineClick}
              disabled={props.isFetching}>
        Form
      </button>
    </div>
  );
};

Form.propTypes = {
  handleGetHeadlineClick: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default Form;
