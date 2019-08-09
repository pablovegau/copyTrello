import styled from 'styled-components';
import { rem } from 'polished';

import { appMargin, appPadding, appGrayColors, appColors, appFontSizes } from '../../theme';

const columnWidth = rem('272px');

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${appMargin.milli};
  width: ${columnWidth};
  min-width: ${columnWidth};
  border-radius: 4px;
  background-color: ${appGrayColors.black10};
`;

export const Title = styled.h3`
  padding-bottom: ${appPadding.milli};
  padding-left: ${appPadding.base};
  padding-top: ${appPadding.base};
  font-weight: 500;
`;

export const TaskList = styled.div`
  flex-grow: 1;
  padding: ${appPadding.milli};
  min-height: ${rem('100px')};
`;
