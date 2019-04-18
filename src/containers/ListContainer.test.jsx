import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ListContainer from './ListContainer.jsx';

afterEach(cleanup);

describe('ListContainer Tests', () => {
  test('should render without crashing', () => {
    const { asFragment } = render(<ListContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
