import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body
{
    background:${props => props.theme.colors.bgColor};
    color:white;
    margin:0px;
    padding:0px;
}
`;

export default GlobalStyles;
