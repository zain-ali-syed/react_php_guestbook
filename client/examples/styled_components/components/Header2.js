import React from 'react';
import styled from 'styled-components';
import { HeaderTypography } from '../utilities/Typography';

// This is another way of doing Header1 - bit cleaner as we dont need to 'invent' a new tag name (e.g AppHeader) for header

const Header2 = ({ className }) => {
  return <header className={className}>I am the header</header>;
};

export default styled(Header2)`
  background: indigo;
  padding: 10px;
  ${HeaderTypography}
`;
