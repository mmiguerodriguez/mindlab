import React from 'react';

const LessonItem = ({ name, index }) => {
  return (
    <p>
      {`${name} -> ${index}`}
    </p>
  );
};

LessonItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
};

export default LessonItem;
