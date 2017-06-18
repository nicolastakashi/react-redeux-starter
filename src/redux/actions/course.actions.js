import * as actionTypes from './action.types';
import courseMock from '../../mock/mock.courses';

export function loadCoursesSuccess(courses) {
  return {
    type: actionTypes.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses() {
  return function (dispatch) {
    return courseMock.getAllCourses()
      .then(courses => {
        debugger;
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(err => {
        throw (err);
      });
  };
}
