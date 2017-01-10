import React from 'react';
import CardsList from '../CardsList/CardsList';


class LessonPage extends React.Component {
  render() {
    
    
    const cards = [
      `Card 0`,
      `Card 1`,
      `Card 2`,
      `Card 3`,
    ];
    
    return (
      <div id = "lesson-page">
        <CardsList cards={cards} />
      </div>
    );
  }
}

export default LessonPage;

/*global slideHelper*/

/**
 * TODO:
 *  slideHelper is not found
 * */