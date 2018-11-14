/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Suche from '../pages/suche';

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<Suche />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('suchen'));
  });
});
