import React, { Fragment } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import CopyTrello from './copyTrello';
import Logo from './logo';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <CopyTrello />
    </Fragment>
  );
};

export default App;
