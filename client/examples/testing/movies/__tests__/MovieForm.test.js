import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from '../MovieForm';


afterEach(cleanup);

const onSubmit = jest.fn(() => console.log('jest mock function'));


test('<MovieForm />', () => {
  // note since MovieForm is a child of NewMovie and we are just rendering MovieForm and not its
  // parent we need to send props down as it is expecting it. So lets send down a mock function

  const { getByTestId, queryByTestId, getByLabelText } = render(<MovieForm submitForm={onSubmit} />);

  fireEvent.change(getByLabelText('Title'), { target: { value: 'hello' } });
  // so this should have changes title of state to 'hello'
  // debug();

  expect(queryByTestId('form-new-movie')).toBeTruthy();
  fireEvent.click(getByTestId('submit_new_movie'));
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({ title: 'hello' }); // hence on submit now it should be called with 'hello'
});
