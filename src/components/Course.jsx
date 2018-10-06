import React from 'react';
import PropTypes from 'prop-types';

function Course(props){
  return(
    <div>
      <h3>{props.name}</h3>
        <ul>
          <li>{props.description}</li>
            <ul>
            {props.steps.map((step) =>
              <li>{step}</li>
            )}
            </ul>
        </ul>
    </div>
  );
}

Course.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
};

export default Course;
