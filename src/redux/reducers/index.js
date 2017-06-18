import { combineReducers } from 'redux';

import coursesReducer from './course.reducer';

const rootReducer = combineReducers({
    coursesReducer: coursesReducer
});

export default rootReducer;