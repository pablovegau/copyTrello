import React from 'react';
import PropTypes from 'prop-types';

import { LogoWrapper, Square, MiniSquareOne, MiniSquareTwo, MiniSquareThree, Text } from './styles';

const Logo = () => {
  return (
    <LogoWrapper>
      <Square>
        <MiniSquareOne />
        <MiniSquareTwo />
        <MiniSquareThree />
      </Square>
      <Text>Frello</Text>
    </LogoWrapper>
  );
};

Logo.propTypes = {};

export default Logo;
