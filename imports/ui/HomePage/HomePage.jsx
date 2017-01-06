import React from 'react';

import Navbar from '../Navbar/Navbar';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Navbar className="animated fadeInDown" />
      </div>
    );
  }
}

export default HomePage;
