import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { headlineActions } from '../actions';
import style from './App.css';
import { Screen, Form } from '../components';

const mapStateToProps = (state) => {
  return {
    headline: state.headline
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(headlineActions, dispatch)
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  constructor(props) {
    super(props);
    this.onGetHeadlineClick = this.onGetHeadlineClick.bind(this);
  }

  onGetHeadlineClick() {
    console.log('onGetHeadlineClick');
    const { actions } = this.props;
    actions.fetchHeadline();
  }

  render() {
    const { isFetching } = this.props.headline;
    return (
      <div className={style.app}>
        <Screen isFetching={isFetching}/>
        <Form handleGetHeadlineClick={this.onGetHeadlineClick}
              isFetching={isFetching}/>
      </div>
    );
  }
};

export default App;
