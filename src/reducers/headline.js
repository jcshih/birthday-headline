import { headlineConstants as h } from '../constants';

const initialState = {
  headlineUrl: null,
  isFetching: false
};

const headline = (state = initialState, action) => {
  switch (action.type) {
    case h.REQUEST_HEADLINE:
      console.log('REQUEST_HEADLINE');
      return {
        ...state,
        isFetching: true
      };
    case h.RECIEVE_HEADLINE:
      console.log('RECIEVE_HEADLINE', action.headlineUrl);
      return {
        ...state,
        headlineUrl: action.headlineUrl,
        isFetching: false
      };
    default:
      return state;
  }
};

export default headline;
