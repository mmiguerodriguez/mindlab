import React from 'react';

class WelcomeItem extends React.Component {
  static propTypes = {
    imageUrl: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  }
  render() {
    return (
      <div className="welcome-item">
        <div className="welcome-image">
          <img src={`images/welcome/${this.props.imageUrl}`} />
        </div>
        <h3>
          {this.props.title}
        </h3>
        <h4>
          {this.props.description}
        </h4>
      </div>
    );
  }
}

export default WelcomeItem;