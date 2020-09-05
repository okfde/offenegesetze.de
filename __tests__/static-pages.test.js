/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Faq from '../pages/faq';
import Kontakt from '../pages/kontakt';
import Presse from '../pages/presse';
import Daten from '../pages/daten';
import Feeds from '../pages/feeds';

describe('With Enzyme', () => {
  it('test Faq', () => {
    const app = shallow(<Faq />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('FAQ'));
  });

  it('test kontakt', () => {
    const app = shallow(<Kontakt />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('Kontakt'));
  });

  it('test Presse', () => {
    const app = shallow(<Presse />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('Presse'));
  });

  it('test daten', () => {
    const app = shallow(<Daten />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('Download'));
  });

  it('test feeds', () => {
    const app = shallow(<Feeds />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('Feeds'));
  });
});
