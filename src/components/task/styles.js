import styled from 'styled-components';

import { appMargin, appPadding, appColors } from '../../theme';

const getComputedStyles = ({ isDragging }) => `
  background-color: ${isDragging ? appColors.lightAccent : 'white'};
`;

const cardBoxShadow = '0px 1px 0px 0px rgba(0, 0, 0, 0.2)';

export const Container = styled.div`
  padding: ${appPadding.milli};
  margin-bottom: ${appMargin.milli};
  border-radius: 4px;
  box-shadow: ${cardBoxShadow};
  ${() => getComputedStyles}
`;
