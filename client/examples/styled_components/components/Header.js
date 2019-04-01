import React from 'react';
import styled from 'styled-components';
import { HeaderTypography } from '../utilities/Typography';

const AppHeader = styled.header`
  background: indigo;
  padding: 10px;
  ${HeaderTypography}
`;

const Header = () => {
  return <AppHeader>I am the header</AppHeader>;
};

export default Header;
