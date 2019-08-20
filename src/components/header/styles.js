import styled from 'styled-components';
import { rem } from 'polished';

import { appColors } from '../../theme';

const headerHeight = rem('50px');

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${headerHeight};
  background-color: ${appColors.lightSecondary};
`;
