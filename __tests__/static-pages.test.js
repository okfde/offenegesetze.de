/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Ueber from '../pages/ueber';
import Kontakt from '../pages/kontakt';
import Mitmachen from '../pages/mitmachen';
import Daten from '../pages/daten';
import Datenschutz from '../pages/datenschutz';
import Feeds from '../pages/feeds';

describe('With Enzyme', () => {
  it('test Ueber', () => {
    const app = shallow(<Ueber />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('Warum'));
  });

  it('test kontakt', () => {
    const app = shallow(<Kontakt />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('Kontakt'));
  });

  it('test Mitmachen', () => {
    const app = shallow(<Mitmachen />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('Mitmachen'));
  });

  it('test daten', () => {
    const app = shallow(<Daten />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('Daten'));
  });

  it('test datenschutz', () => {
    const app = shallow(<Datenschutz />);

    expect(app.find('h1').text()).toEqual(
      expect.stringContaining('Datenschutz')
    );
  });

  it('test feeds', () => {
    const app = shallow(<Feeds />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('Feeds'));
  });
});
