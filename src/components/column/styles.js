import styled from 'styled-components';
import { rem } from 'polished';

import { appMargin, appPadding, appGrayColors } from '../../theme';

const columnWidth = rem('272px');

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${columnWidth};
  margin: ${appMargin.milli};
  border-radius: 4px;
  background-color: ${appGrayColors.black10};
`;

export const Title = styled.h3`
  padding: ${appPadding.milli};
`;

export const TaskList = styled.div`
  padding: ${appPadding.milli};
  flex-grow: 1;
  min-height: ${rem('100px')};
`;
