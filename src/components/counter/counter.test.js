'use strict';

import React from 'react';
import Counter from './counter.js';
import renderer from 'react-test-renderer';

describe('Counter component', () => {
  it('renders correctly', () => {
    let counter = shallow(<Counter />);
    expect(counter.find('section')).toBeTruthy();
    expect(counter.find('span')).toBeTruthy();
    expect(counter.find('a')).toBeTruthy();
  })

  it('starts count at 0', () => {
    let counter = shallow(<Counter />);
    expect(counter.find('span').text()).toBe('0');
  });

  it('can change state and increment', () => {
    let counter = shallow(<Counter />);
    expect(counter.state('count')).toBe(0)
    const increment = counter.find('.up')
    increment.simulate('click')
    expect(counter.state('count')).toBe(1)
    increment.simulate('click')
    expect(counter.state('count')).toBe(2)
  })

  it('can change state and decrement', () => {
    let counter = shallow(<Counter />);
    expect(counter.state('count')).toBe(0)
    const increment = counter.find('.down')
    increment.simulate('click')
    expect(counter.state('count')).toBe(-1)
    increment.simulate('click')
    expect(counter.state('count')).toBe(-2)
  })

  it('state changes transfer to the dom', () => {
    let counter = mount(<Counter />);
    expect(counter.state('count')).toBe(0)

    const increment = counter.find('.up')
    increment.simulate('click')
    expect(counter.state('count')).toBe(1)

    const decrement = counter.find('.down')
    decrement.simulate('click')
    expect(counter.state('count')).toBe(0)
    decrement.simulate('click')
    expect(counter.state('count')).toBe(-1)
  })

  it('matches snapshot', () => {
    const snapshot = renderer.create(<Counter />).toJSON();
    expect(snapshot).toMatchSnapshot();
  })
});