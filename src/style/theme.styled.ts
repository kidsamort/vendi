import { colors } from './helpers.styled';
import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  bg: colors.defaults.white,
  text: colors.theme.light.w10,
};

export const dark: DefaultTheme = {
  bg: colors.defaults.black,
  text: colors.theme.dark.b0,
};