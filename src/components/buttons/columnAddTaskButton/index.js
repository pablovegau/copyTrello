import React from 'react';
import PropTypes from 'prop-types';

import { AddButton } from './styles';
import { appGrayColors, appColors } from '../../../theme';

const ColumnAddTaskButton = ({ label, bgColor, bgColorHover, textColor, textColorHover }) => {
  return (
    <AddButton bgColor={bgColor} bgColorHover={bgColorHover} textColor={textColor} textColorHover={textColorHover}>
      {label}
    </AddButton>
  );
};

ColumnAddTaskButton.propTypes = {
  label: PropTypes.string,
  bgColor: PropTypes.string,
  bgColorHover: PropTypes.string,
  textColor: PropTypes.string,
  textColorHover: PropTypes.string,
};

ColumnAddTaskButton.defaultProps = {
  label: '+ Add new Card',
  bgColor: 'transparent',
  bgColorHover: appColors.lightPrimary,
  textColor: appGrayColors.black60,
  textColorHover: appGrayColors.black80,
};

export default ColumnAddTaskButton;
