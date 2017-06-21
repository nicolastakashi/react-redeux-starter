import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../../components/index';
import Home from '../../components/home/index';
import About from '../../components/about/index';
import Courses from '../../components/courses/index';
import CourseManage from '../../components/courses/manage/managecourse.component';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="courses" component={Courses} />
    <Route path="course-manage" component={CourseManage} />
    <Route path="course-manage/:id" component={CourseManage} />
  </Route>
);
