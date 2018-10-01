import React from 'react';
import PropTypes from 'prop-types';
import Course from './Course';

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
