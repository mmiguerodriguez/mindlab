import React from 'react';

import WelcomeItem from './WelcomeItem/WelcomeItem';
import WelcomeMenu from './WelcomeMenu/WelcomeMenu';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemPosition: 0, // current visible item number
    };
  }
  render() {
    const welcomeItemsContent = [
      {
        imageUrl: 'page1.png',
        backgroundColor: 'rgba(46, 204, 113, 0.8)',
        title: 'Bienvenido a Diamond Knowledge',
        description: 'Vas a poder aprender a programar y a dominar cualquier lenguaje',
      },
      {
        imageUrl: 'page2.png',
        backgroundColor: 'rgba(52, 152, 219, 0.8)',
        title: 'Aprendé de la mejor forma',
        description: 'Los cursos son cortos y eficientes para aprender rápido en cualquier lugar',
      },
      {
        imageUrl: 'a',
        backgroundColor: 'rgba(155, 89, 182, 0.8)',
        title: 'a',
        description: 'a',
      },
      {
        imageUrl: 'a',
        backgroundColor: 'rgba(230, 126, 34, 0.8)',
        title: 'a',
        description: 'a',
      },
    ];
    const welcomeItemsArray = welcomeItemsContent.map(item =>
      <WelcomeItem
        {...item}
      />
    );

    return (
      <div className="welcome-page">
        {
          welcomeItemsArray
        }
        <WelcomeMenu
          pagesCount={welcomeItemsArray.length}
          currentPosition={this.state.itemPosition}
        />
      </div>
    );
  }
}

export default WelcomePage;
