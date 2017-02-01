import React from 'react';
import Measure from 'react-measure';
import ColorInterpolation from 'color-interpolate';
import SlideHelper from './../../utils/client/SlideHelper';

import WelcomeItem from './WelcomeItem/WelcomeItem';
import WelcomeMenu from './WelcomeMenu/WelcomeMenu';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0, // current visible item number
      // The dimensions of the card, used internally
      dimensions: {
        width: 1, // Default value only
        height: 1, // Default value only
        measured: false,
      },
      // Used by the sliding movement
      displacement: {
        x: 0, // Used to animate  movement
      },
    };

    this.slider = null;
  }

  componentWillUnmount() {
    if (this.slider) {
      this.slider.disable();
      this.slider = null;
    }
  }

  updateSlider() {
    if (!this.slider) {
      // Create and instantiate a SlideHelper
      const disableLeft = this.state.currentPosition === 1;
      const disableRight = this.state.currentPosition === 0;
      const $welcomePageItems = $(this.welcomePageItems);

      const stateUpdateHandler = (stateX) => {
        if (this.state.displacement.x !== stateX * this.state.dimensions.width) {
          this.setState({
            displacement: {
              x: stateX * this.state.dimensions.width,
            },
          });
        }
      };

      const rightHandler = () => {
        this.setState({
          currentPosition: this.state.currentPosition - 1,
          displacement: {
            x: 0,
          },
        });
      };

      const leftHandler = () => {
        this.setState({
          currentPosition: this.state.currentPosition + 1,
          displacement: {
            x: 0,
          },
        });
      };

      const finishHandler = () => {
        this.slider = null;
      };

      const slideHelperProps = {
        $element: $welcomePageItems,
        size: this.state.dimensions.width,
        rightHandler,
        leftHandler,
        finishHandler,
        stateUpdateHandler,
        disableLeft,
        disableRight,
      };

      this.slider = new SlideHelper(slideHelperProps);
    } else {
      this.slider.setSize(this.state.dimensions.width);
    }
  }

  render() {
    if (this.state.dimensions.measured) {
      this.updateSlider();
    }

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
      /*{
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
      },*/
    ];
    const welcomeItemsArray = welcomeItemsContent.map((item, index) =>
      <WelcomeItem
        key={`welcome-item-${index}`}
        {...item}
      />);

    // Creates a color palette from the array of colors constructed with welcomeItemsContent
    const colorPalette = ColorInterpolation(welcomeItemsContent.map(item => item.backgroundColor));

    const welcomePageStyle = {
      backgroundColor: colorPalette(
        this.state.currentPosition + (-this.state.displacement.x / this.state.dimensions.width)),
    };

    const welcomePageItemsStyle = {
      transform: `translateX(${this.state.displacement.x + (-this.state.currentPosition * this.state.dimensions.width)}px)`,
    };

    return (
      <div style={welcomePageStyle} className="welcome-page">
        <Measure
          onMeasure={(dimensions) => {
            this.setState({ dimensions: { ...dimensions, measured: true } });
          }}
        >
          <div
            id="welcome-page-items-container"
            style={welcomePageItemsStyle}
            ref={(welcomePageItems) => { this.welcomePageItems = welcomePageItems; }}
          >
            {
              welcomeItemsArray
            }
          </div>
        </Measure>
        <WelcomeMenu
          pagesCount={welcomeItemsArray.length}
          currentPosition={this.state.currentPosition}
        />
      </div>
    );
  }
}

export default WelcomePage;
