import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import MovieDetail, { POSTER_PATH, BACKDROP_PATH } from '../MovieDetail';


global.fetch = require('jest-fetch-mock');


afterEach(() => {
  cleanup();
  console.error.mockClear();
});


console.error = jest.fn();

test('<MovieDetail />', async () => {
  const movie = {
    id: '123',
    title: 'Rambo',
    overview: 'This is the overview',
    poster_path: '/some_poster.jpg',
    backdrop_path: '/some_backdrop.jpg',
    release_date: '12/12/12',
  };

  fetch.mockResponseOnce(JSON.stringify(movie));


  const { getByText, getByTestId } = render(<MovieDetail match={{ params: { id: '123' } }} />);
  await waitForElement(() => getByText(movie.title));
  expect(getByTestId('title').textContent).toBe(movie.title);
  expect(getByTestId('overview').textContent).toBe(movie.overview);
  expect(getByTestId('poster_path').src).toBe(`${POSTER_PATH}${movie.poster_path}`);
  expect(getByTestId('backdrop_path').getAttribute('data-backdrop')).toBe(`${BACKDROP_PATH}${movie.backdrop_path}`);
  expect(getByTestId('release_date').textContent).toBe(movie.release_date);
});
