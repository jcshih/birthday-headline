import { headlineConstants as h } from '../constants';

const fetchHeadline = () => {
  console.log('fetchHeadline');
  return (dispatch) => {
    console.log('dispatch');
    dispatch({
      type: h.REQUEST_HEADLINE
    });

    return setTimeout(() => dispatch({
      type: h.RECIEVE_HEADLINE,
      headlineUrl: 'wat'
    }), Math.random() * 2000 + 1000);
  };
};

const headlineActions = {
  fetchHeadline
};

export default headlineActions;
