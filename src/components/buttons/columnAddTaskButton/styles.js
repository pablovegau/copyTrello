import styled from 'styled-components';

import { appPadding, appFontSizes } from '../../../theme';

const getComputedStyles = ({ bgColor, bgColorHover, textColor, textColorHover }) => `
  background-color: ${bgColor};
  color: ${textColor};

  &:hover {
    background-color: ${bgColorHover};
    color: ${textColorHover};
  }
`;

export const AddButton = styled.button`
  padding: ${appPadding.milli};
  border: none;
  border-radius: 0 0 4px 4px;
  font-size: ${appFontSizes.milli};
  text-align: left;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;
  ${props => getComputedStyles(props)}
`;
