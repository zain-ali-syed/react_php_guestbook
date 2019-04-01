import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import NewMovie from '../NewMovie';


afterEach(cleanup);

test('<NewMovie />', (useSnapshot = true) => {
  console.log('useSnapshot ', useSnapshot);
  const {
    debug, getByTestId, queryByTestId, container,
  } = render(<NewMovie />);
  // debug();

  expect(getByTestId('title').textContent).toBe('New Movie');
  expect(queryByTestId('form-new-movie')).toBeTruthy();
  if (useSnapshot) expect(container.firstChild).toMatchSnapshot();
});
