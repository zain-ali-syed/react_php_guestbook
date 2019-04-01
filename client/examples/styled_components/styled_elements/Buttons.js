import styled from 'styled-components';
import { lighten } from 'polished';
import shadow from '../utilities/Elevation';

const buttonSizes = {
  small: { padding: '10px 25px', 'font-size': '12px' },
  default: { padding: '15px 30px', 'font-size': '16px' },
  medium: { padding: '20px 35px', 'font-size': '20px' },
  large: { padding: '25px 40px', 'font-size': '24px' }
};

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.button.default};
  border: none;
  color: blue;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  transition: 0.3s ease box-shadow;
  ${props => (props.size ? buttonSizes[props.size] : buttonSizes.default)}
  ${shadow.button}
  &:hover {
    ${shadow.button_hover}
    background: ${lighten(0.3, '#00ff00')}
  }
`;

// extending a styled component
export const SubmitButton = styled(Button)`
  background: ${({ theme }) => theme.colors.button.submit};
`;

export const CancelButton = styled(Button)`
  background: ${({ theme }) => theme.colors.button.cancel};
`;
