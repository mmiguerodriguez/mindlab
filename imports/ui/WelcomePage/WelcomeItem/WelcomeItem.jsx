import React from 'react';
import styles from './WelcomeItem.scss';

class WelcomeItem extends React.Component {
  static propTypes = {
    imageUrl: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  }
  render() {
    return (
      <div className={styles.WelcomeItem}>
      
      </div>
    );
  }
}

export default WelcomeItem;