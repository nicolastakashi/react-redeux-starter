import { combineReducers } from 'redux';

import coursesReducer from './course.reducer';
import authorReducer from './author.reducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
  authors: authorReducer
});

export default rootReducer;
