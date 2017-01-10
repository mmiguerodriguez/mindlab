import React from 'react';
import { Link } from 'react-router'

const LessonItem = ({ name, index }) => {
  return (
    <div className="lesson-item">
      {/* TODO: prettify url*/ }
      <Link to={`/course/programacion/${name}`} className="btn">
        <h3>
          {`${index}. ${name}`}
        </h3>
      </Link>
      <hr />
    </div>
  );
};

LessonItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
};

export default LessonItem;
