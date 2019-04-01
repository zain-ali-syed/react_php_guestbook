import { css } from 'styled-components';

/*
export const fixedTop = css`
  position: fixed;
  top: ${props => `${props.top}px`};
  left: 0;
`;
*/

// alternatively we can do above as

export const fixedTop = ({
  x = 0,
  y = 0,
  yCorner = 'top',
  xCorner = 'left',
  position = 'fixed'
} = {}) => css`
  position: ${position};
  ${yCorner}: ${y}px;
  ${xCorner}: ${x}px;
`;
