import { headlineConstants as h } from '../constants';

const fetchHeadline = () => {
  return (dispatch) => {
    dispatch({
      type: h.REQUEST_HEADLINE
    });

    return setTimeout(() => dispatch({
      type: h.RECIEVE_HEADLINE,
      headlineUrl: '/static/headline.png'
    }), Math.random() * 2000 + 1000);
  };
};

const headlineActions = {
  fetchHeadline
};

export default headlineActions;
