/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import IndexPage from '../pages/index.js';

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<IndexPage />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('Zugang'));
  });
});
