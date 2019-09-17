'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './counter';

describe('Counter component', () => {
  it('renders correctly', () => {
    const counter = shallow(<Counter />);
    expect(counter.find('section')).toBeTruthy();
    expect(counter.find('span')).toBeTruthy();
    expect(counter.find('a')).toBeTruthy();
  });

  it('starts count at 0', () => {
    const counter = shallow(<Counter />);
    expect(counter.find('span').text()).toBe('0');
  });

  it('can change state and increment', () => {
    const counter = shallow(<Counter />);
    expect(counter.state('count')).toBe(0);
    const increment = counter.find('.up');
    increment.simulate('click');
    expect(counter.state('count')).toBe(1);
    increment.simulate('click');
    expect(counter.state('count')).toBe(2);
  });

  it('can change state and decrement', () => {
    const counter = shallow(<Counter />);
    expect(counter.state('count')).toBe(0);
    const increment = counter.find('.down');
    increment.simulate('click');
    expect(counter.state('count')).toBe(-1);
    increment.simulate('click');
    expect(counter.state('count')).toBe(-2);
  });

  it('state changes transfer to the dom', () => {
    const counter = mount(<Counter />);
    expect(counter.state('count')).toBe(0);

    const increment = counter.find('.up');
    increment.simulate('click');
    expect(counter.state('count')).toBe(1);

    const decrement = counter.find('.down');
    decrement.simulate('click');
    expect(counter.state('count')).toBe(0);
    decrement.simulate('click');
    expect(counter.state('count')).toBe(-1);
  });

  it('matches snapshot', () => {
    const snapshot = renderer.create(<Counter />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
