import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo';

import { HeaderWrapper } from './styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
    </HeaderWrapper>
  );
};

Header.propTypes = {};
