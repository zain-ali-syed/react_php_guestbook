import { red, pink, green, orange } from './utilities';

export const ThemeRed = {
  colors: {
    bgColor: '#673ab7',
    primary: red,
    secondary: red.darken_2,
    button: {
      default: pink.darken_1,
      submit: pink.darken_3,
      cancel: pink.darken_4
    }
  }
};

export const ThemeGreenOrange = {
  colors: {
    bgColor: '#ffab00',
    primary: green,
    secondary: green.darken_2,
    button: {
      default: orange.darken_1,
      submit: orange.darken_3,
      cancel: orange.darken_4
    }
  }
};
