import styled from 'styled-components';
import { rem } from 'polished';

import { appColors, fantasy, appFontSizes, appGrayColors } from '../../theme';

const size = 38;

const logoBorderRadius = rem('2px');
const logoSquareMargin = rem('2px');

const squareWidth = rem(`${size}px`);
const squareHeight = squareWidth;

const miniSquareWidth = rem('10px');
const miniSquareOneHeight = rem('34px');
const miniSquareTwoHeight = rem('16px');
const miniSquareThreeHeight = rem('28px');

const textMarginLeft = rem('5px');

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Square = styled.div`
  display: flex;
  width: ${squareWidth};
  height: ${squareHeight};
  background-color: ${appColors.primary};
  border-radius: ${logoBorderRadius};
`;

export const MiniSquare = styled.div`
  border-radius: ${logoBorderRadius};
  margin-right: ${logoSquareMargin};
  margin-top: ${logoSquareMargin};
  width: ${miniSquareWidth};
`;

export const MiniSquareOne = styled(MiniSquare)`
  margin-left: ${logoSquareMargin};
  height: ${miniSquareOneHeight};
  background-color: ${appColors.secondary};
`;

export const MiniSquareTwo = styled(MiniSquare)`
  background-color: ${appColors.tertiary};
  height: ${miniSquareTwoHeight};
`;

export const MiniSquareThree = styled(MiniSquare)`
  background-color: ${appColors.quaternary};
  height: ${miniSquareThreeHeight};
`;

export const Text = styled.h1`
  margin-left: ${textMarginLeft};
  color: ${appGrayColors.black70};
  font-family: ${fantasy};
  font-size: ${appFontSizes.exa};
  line-height: 0;
  cursor: default;
`;
