import React from 'react';
import ListContainer from './ListContainer';
import { mount, shallow } from 'enzyme';

describe('ListContainer tests', () => {
  it('should render without crashing', () => {
    const listContainer = shallow(<ListContainer />);
    expect(listContainer).not.toBeUndefined();
  });
  it('should match the snapshot', () => {
    const listContainer = mount(<ListContainer />); 
    expect(listContainer).toMatchSnapshot();
  })
});
