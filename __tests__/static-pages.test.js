/* eslint-env jest */

import { shallow } from 'enzyme';

import Daten from '../pages/daten';
import Faq from '../pages/faq';
import Feeds from '../pages/feeds';
import Presse from '../pages/presse';

describe('With Enzyme', () => {
  it('test Faq', () => {
    const app = shallow(<Faq />);

    expect(app.find('h1').text()).toEqual(expect.stringContaining('FAQ'));
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
