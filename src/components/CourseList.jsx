import React from 'react';
import PropTypes from 'prop-types';
import Course from './Course';
import { Switch, Route, Link } from 'react-router-dom';

function CourseList(props){
  return(
    <div>
      {props.courseList.map((course) =>
        <Course name={course.name}
                description={course.description}
                steps= {course.steps}
                id={course.id}
                key={course.id} />)}
    </div>
  );
}

CourseList.propTypes = {
  courseList: PropTypes.array.isRequired,
};

export default CourseList;
