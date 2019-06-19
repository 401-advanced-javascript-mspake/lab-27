import React from 'react';

/**
 * Counter Module
 * @module src/components/counter/counter
 * @exports Counter
 */

/**
 * @class Counter
 * extends React.Component
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  /**
   * Handle up
   * @method handleUP
   * @param {*} event - takes in the click event
   */
  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

    /**
   * Handle down
   * @method handleDown
   * @param {*} event - takes in the click event
   */
  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  /**
   * Update Counter
   * @method updateCounter
   * @param {*} count  - The newly incremented or decremented count
   */
  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }

  /**
   * Render
   * @method render
   * React render method. Renders the Counter
   */
  render() {
    let classes = ['count', this.state.polarity].join(' ');
    return (
      <section className="counter">
        <a href="#" className="down clicker" onClick={this.handleDown}>
          -
        </a>
        <span className={classes}>{this.state.count}</span>
        <a href="#" className="up clicker" onClick={this.handleUp}>
          +
        </a>
      </section>
    );
  }
}

export default Counter;