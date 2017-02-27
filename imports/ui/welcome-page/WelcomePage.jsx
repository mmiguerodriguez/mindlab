import React from 'react';
import Measure from 'react-measure';
import ColorInterpolation from 'color-interpolate';

import SlideHelper from './../../utils/client/SlideHelper';

import WelcomeItem from './welcome-item/WelcomeItem';
import WelcomeMenu from './welcome-menu/WelcomeMenu';
import welcomeItemsContent from './HardcodedWelcomeItemsContent';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0, // current visible item number
      // The dimensions of the card, used internally
      dimensions: {
        width: 1, // Default value only
        height: 1, // Default value only
        measured: false,
      },
      // Used by the sliding movement
      displacement: {
        x: 0, // Used to animate movement
      },
      // When sliding left should not enable slideHelper (it should be disabled)
      slidingLeft: false,
    };

    this.slider = null;

    this.slideLeft = this.slideLeft.bind(this);
  }

  componentDidMount() {
    // Style needed to make all the content visible
    const newHeight = $(window).height() - $('#welcome-menu').height();
    $('#welcome-page-items-container').css('height', `${newHeight}px`);
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
      const disableLeft = this.state.position === welcomeItemsContent.length - 1;
      const disableRight = this.state.position === 0;
      const $welcomePageItems = $(this.welcomePageItems);

      const stateUpdateHandler = (stateXRaw) => {
        // Avoid bounce when stateX is above limits; makes an upper bound of 1
        const stateX = Math.sign(stateXRaw) * Math.min(Math.abs(stateXRaw), 1);

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
          position: this.state.position - 1,
          displacement: {
            x: 0,
          },
        });
      };

      const leftHandler = () => {
        this.setState({
          position: this.state.position + 1,
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
        exitThreshold: this.state.dimensions.width * 0.55,
        exitThresholdSpeed: Math.ceil(this.state.dimensions.width / 30),
        velocityModifier: 50,
        frictionAcceleration: -0.001,
        returnSpeed: Math.ceil(this.state.dimensions.width / 30),
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
      this.slider.setReturnSpeed(Math.ceil(this.state.dimensions.width / 30));
      this.slider.setExitThresholdSpeed(Math.ceil(this.state.dimensions.width / 30));
    }
  }

  /**
   * Slides welcomePage to the left to show the next welcomeItem
   * @return {undefined}
   */
  slideLeft() {
    if (this.state.slidingLeft) {
      return;// If already moving left, do not accept
    }

    this.setState({ slidingLeft: true });
    if (this.slider) {
      this.slider.disable();
      this.slider = null;
    }
    const animationDuration = 15;// The number of frames the animation lasts
    let currentPosition = 0;
    const framePositionDisplacement = -this.state.dimensions.width / animationDuration;
    let finalPosition = -this.state.dimensions.width;

    /**
     * Left sliding animation frame
     */
    const slideAnimationFrame = () => {
      finalPosition = -this.state.dimensions.width;
      // Updated every frame because width may change

      if (currentPosition <= finalPosition) { // position is decreased because negative is left
        this.setState({
          position: this.state.position + 1,
          displacement: {
            x: 0,
          },
          slidingLeft: false,
        });

        return;
      }

      this.setState({ displacement: { x: currentPosition } });
      currentPosition += framePositionDisplacement;

      if (currentPosition <= finalPosition) { // position is decreased because negative is left
        currentPosition = finalPosition;
      }

      requestAnimationFrame(slideAnimationFrame);
    };

    requestAnimationFrame(slideAnimationFrame);
  }

  render() {
    const welcomeItemsArray = welcomeItemsContent.map((item, index) =>
      <WelcomeItem
        key={`welcome-item-${index}`}
        lastItem={index === welcomeItemsContent.length - 1}
        pagesCount={welcomeItemsContent.length}
        {...item}
      />);

    if (this.state.dimensions.measured && !this.state.slidingLeft) {
      this.updateSlider();
    }

    // Creates a color palette from the array of colors constructed with welcomeItemsContent
    const colorPalette = ColorInterpolation(welcomeItemsContent.map(item => item.backgroundColor));
    const welcomePageStyle = {
      // We pass as a parameter the actual position of the user screen, we
      // normalize it, so it is between 0 and 1
      backgroundColor: colorPalette(
        (this.state.position + (-this.state.displacement.x / this.state.dimensions.width))
        / (welcomeItemsContent.length - 1)),
    };

    const welcomePageItemsStyle = {
      transform: `translateX(${this.state.displacement.x + (-this.state.position * this.state.dimensions.width)}px)`,
    };

    return (
      <div style={welcomePageStyle} id="welcome-page">
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
          pagesCount={welcomeItemsContent.length}
          position={this.state.position}
          next={this.slideLeft}
        />
      </div>
    );
  }
}

export default WelcomePage;
