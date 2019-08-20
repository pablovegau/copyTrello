import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import Logo from '../src/components/logo';

storiesOf('Logo').add('ColumnAddTaskButton', () => (
  <Fragment>
    <GlobalStyle />
    <Logo />
  </Fragment>
));
