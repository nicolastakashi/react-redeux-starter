import * as actionTypes from '../actions/action.types';

export default function courseReducer(state = [], action) {
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
