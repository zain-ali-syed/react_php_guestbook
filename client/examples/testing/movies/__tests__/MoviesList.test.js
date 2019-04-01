import React from 'react';
import {
  render, cleanup, fireEvent, waitForElement,
} from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import MoviesList from '../MoviesList';


global.fetch = require('jest-fetch-mock');

const movies = {
  success: true,
  results: [
    {
      id: '123',
      title: 'Rambo',
      overview: 'This is the overview',
      poster_path: '/some_poster.jpg',
      backdrop_path: '/some_backdrop.jpg',
      release_date: '12/12/12',
    },

    {
      id: '323',
      title: 'Commando',
      overview: 'This is the Commando',
      poster_path: '/some_poster.jpg',
      backdrop_path: '/some_backdrop.jpg',
      release_date: '12/12/12',
    },
  ],
};

const movie = movies.results[0];

afterEach(() => {
  cleanup();
});

test('<MoviesList /> when results load successfully', async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));


  const {
    getByTestId, queryByTestId, getAllByTestId,
  } = render(<MemoryRouter><MoviesList /></MemoryRouter>);

  // test loading states
  expect(getByTestId('loading')).toBeTruthy();
  await waitForElement(() => getByTestId('movie-link'));
  expect(queryByTestId('loading')).toBeFalsy();

  // even though we have tested Movie we can copy and paste and chuck in some tests just to test

  // getByTestID returns first node it finds in the dom tree which matches
  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`);

  // check the right amount of Movie components are being rendered
  expect(getAllByTestId('movie-link').length).toBe(movies.results.length);
});

test('<MoviesList /> when results DONT load successfully', async () => {
  movies.success = false;
  fetch.mockResponseOnce(JSON.stringify(movies));

  const {
    getByTestId,
  } = render(<MemoryRouter><MoviesList /></MemoryRouter>);

  // test loading states
  expect(getByTestId('loading')).toBeTruthy();
});
