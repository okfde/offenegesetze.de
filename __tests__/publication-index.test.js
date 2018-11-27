/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import PublicationIndex from '../pages/veroeffentlichung';

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<PublicationIndex />);

    expect(app.find('h1').text()).toEqual(
      expect.stringContaining('Veröffentlichungen')
    );
  });
});
