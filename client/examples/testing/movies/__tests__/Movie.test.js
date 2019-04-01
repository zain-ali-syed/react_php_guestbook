import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Movie, { POSTER_PATH } from '../Movie';


afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<Movie />', () => {
  render(<Movie />);
  expect(console.error).toBeCalled();
});

const movie = { id: '123', title: 'Rambo', poster_path: 'rambo.jpg' };

test('<Movie movie/>', () => {
  const { getByTestId } = render(<MemoryRouter><Movie movie={movie} /></MemoryRouter>);

  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`);
  expect(getByTestId('movie-poster').src).toBe(`${POSTER_PATH}${movie.poster_path}`);
  expect(console.error).not.toBeCalled();
});
