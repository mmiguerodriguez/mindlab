import React from 'react';

import styles from './WelcomePage.scss';
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
    const welcomeItemsContent = [{
      imageUrl: '',
      title: '',
      description: '',
    },
    {
      imageUrl: '',
      title: '',
      description: '',
    },
    {
      imageUrl: '',
      title: '',
      description: '',
    },
    {
      imageUrl: '',
      title: '',
      description: '',
    }];

    const welcomeItemsArray = welcomeItemsContent.map(item => 
      <WelcomeItem
        {...item}
      />
    );
    
    return (
      <div className={styles.WelcomePage}>
        {
          welcomeItemsArray
        }

        <WelcomeMenu />
      </div>
    );
  }
}

export default WelcomePage;
