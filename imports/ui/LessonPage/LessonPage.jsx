import React from 'react';

import ProgressBar from './ProgressBar/ProgressBar';
import CardsList from '../CardsList/CardsList';

class LessonPage extends React.Component {
  render() {
    let progress = 30; // For the moment the progress is constantly 30%, but this have to change
    // TODO: add real cards
    const cardsContent = [
      {
        type: 'code',
        task: 'Devolvé la suma de los números del 1 al 100',
        results: [
          {
            result: '5050',
            correct: true,
          },
        ],
      },
    ];
    return (
      <div>
        <ProgressBar progress={progress} /> {/* ProgressBar component where progress is passed */}
        <CardsList cards={cardsContent} />
      </div>
    );
  }
}

LessonPage.propTypes = {
  params: React.PropTypes.shape({
    lessonName: React.PropTypes.string.isRequired,
  }),
};

LessonPage.defaultProps = {
  params: null,
};

export default LessonPage;
