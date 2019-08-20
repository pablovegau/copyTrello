import React from 'react';

import Board from '../board';
import { Header } from '../header';

import { Container } from './styles';

const copyTrello = () => {
  return (
    <Container>
      <Header />
      <Board />
    </Container>
  );
};

export default copyTrello;
