import React from 'react';
import CardsList from '../CardsList/CardsList';

class LessonPage extends React.Component {
  render() {
    // TODO: add real cards
    const cardsContent = [
      {
        type: 'multiple-choice',
        imageUrl: 'https://hpht.s3.amazonaws.com/images/diamonds/28/photo_small.png',
        question: '¿Qué es una variable?',
        options: [{
        	content: 'Una serie de pasos que sirven para cumplir un objetivo',
          message: '¡Esa es la definición de algoritmo, no de variable!',
        },
        {
        	content: 'Un nombre que se le da a la memoria de la computadora',
          message: 'Las variables son pedazos de la memoria, no la memoria en si.',
        },
        {
        	content: 'Un pedazo de memoria que podemos usar para guardar valores',
          message: '¡Bien! Esa era la opción correcta',
          correct: true,
        }]
      },
      /*
      {
        type: 'content',
        imageUrl: '/images/welcome/page1.png',
        title: 'HOLA',
        text: 'Esto es un texto',
      },
      {
        type: 'content',
        imageUrl: '/images/welcome/page2.png',
        title: 'Segunda card',
        text: 'Esto es otro texto, un poco más largo que el anterior',
      },
      {
        type: 'content',
        imageUrl: '/images/welcome/page1.png',
        title: 'Tercera card',
        text: 'Esto es otro texto, un poco más largo que el anterior, y también que el primero.',
      },
      */
    ];
    return (
      <div>
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

export default LessonPage;
