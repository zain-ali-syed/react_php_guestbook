import React from 'react';
import styled from 'styled-components';

const AboutUs = ({ className }) => (
  <div className={className}>
    <h1>About Us</h1>
    <p>This is the about us page</p>
  </div>
);

export default styled(AboutUs)`
  h1 {
    color: brown;
  }
  color: green;
`;
