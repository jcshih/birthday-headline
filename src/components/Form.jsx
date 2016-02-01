import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import style from './Form.css';

class Form extends Component {
  clickHandler(e) {
    e.preventDefault();
    this.props.handleGetHeadlineClick();
    findDOMNode(this.refs.month).value = "";
    findDOMNode(this.refs.day).value = "";
    findDOMNode(this.refs.year).value = "";
    this.refs.button.focus();
  }

  render() {
    return (
      <form className={style.form}
            onSubmit={this.clickHandler.bind(this)}>
        <div className={style.birthdayInput}>
          <input ref="month" type="text"
                 style={{width: '2em'}} placeholder="mm"/>
          {' '}
          <input ref="day" type="text"
                 style={{width: '2em'}} placeholder="dd"/>
          {' '}
          <input ref="year" type="text"
                 style={{width: '4em'}} placeholder="yyyy"/>
        </div>
        <div>
          <button ref="button"
                  className={style.button}
                  disabled={this.props.isFetching}>
            See a newspaper headline from the day you were born!
          </button>
        </div>
      </form>
    );
  }
};

Form.propTypes = {
  handleGetHeadlineClick: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default Form;
