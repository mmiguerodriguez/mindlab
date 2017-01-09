import React from 'react';

class LessonPage extends React.Component {
  render() {
    // hardcoded way to get the lessons
    const lessonsContent = [
      
    ];
    return (
      <div>
        {this.props.params.lessonName}
      </div>
    );
  }
}

LessonPage.propTypes = {
  params: React.PropTypes.shape({
    lessonName: React.PropTypes.string.isRequired,
  }),
};

export default LessonPage;
