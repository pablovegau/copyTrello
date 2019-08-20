import { createGlobalStyle } from 'styled-components';

import { sansSerif } from '../theme';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: ${sansSerif};
}

*, *::before, *::after {
  box-sizing: inherit;
}

ul, li, h1, h2, h3, p, button {
  margin: 0;
}

ul {
  list-style: none;
  padding-inline-start: 0;
}

button {
  background: transparent;
  border: 0;
  outline: 0;
  font-family: ${sansSerif};
}
`;
