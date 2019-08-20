import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyle } from '../src/styles/GlobalStyle';

import ColumnAddTaskButton from '../src/components/buttons/columnAddTaskButton';

import { text } from '@storybook/addon-knobs';

import { appGrayColors, appColors } from '../src/theme/';

storiesOf('Buttons').add('ColumnAddTaskButton', () => {
  const label = text('Label', '+ Add new Card');
  const bgColor = text('Background-color', 'transparent');
  const bgColorHover = text('Background-color hover', appColors.lightPrimary);
  const textColor = text('Text color', appGrayColors.black60);
  const textColorHover = text('Text color hover', appGrayColors.black80);
  return (
    <Fragment>
      <GlobalStyle />
      <ColumnAddTaskButton
        label={label}
        bgColor={bgColor}
        bgColorHover={bgColorHover}
        textColor={textColor}
        textColorHover={textColorHover}
      />
    </Fragment>
  );
});
