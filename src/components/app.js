import React, { Fragment } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import CopyTrello from './copyTrello';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <CopyTrello />
    </Fragment>
  );
};

export default App;
