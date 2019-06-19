import React from 'react';

/**
 * Counter Module
 * @module src/components/header/header
 * @exports Header
 */

 /**
 * @class Header
 * extends React.Component
 */
class Header extends React.Component {
    /**
   * Render
   * @method render
   * React render method. Renders the Header
   */
  render() {
    return (
      <header>
        <h1>Counters <span>R</span> Fun</h1>
      </header>
    );
  }
}

export default Header;
