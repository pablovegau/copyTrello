import styled from 'styled-components';

import { appFontSizes, appMargin } from '../../theme';

export const Container = styled.div`
  margin-top: ${appMargin.base};
`;

export const ColumnsContainer = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  margin-left: ${appMargin.base};
  margin-bottom: ${appMargin.milli};
  font-size: ${appFontSizes.tera};
  font-weight: 700;
`;
