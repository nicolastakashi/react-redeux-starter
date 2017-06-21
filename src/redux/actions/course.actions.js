import * as actionTypes from './action.types';
import courseMock from '../../mock/mock.courses';

export function loadCoursesSuccess(courses) {
  return {
    type: actionTypes.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function createCourseSuccess(course) {
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    course
  };
}

export function updateCourseSuccess(course) {
  return {
    type: actionTypes.UPDATE_COURSE_SUCCESS,
    course
  };
}

export function loadCourses() {
  return function (dispatch) {
    return courseMock.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(err => {
        throw (err);
      });
  };
}

export function saveCourse(course) {
  return function (dispatch) {
    return courseMock.saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      }).catch(error => {
        throw (error);
      });
  };
}
