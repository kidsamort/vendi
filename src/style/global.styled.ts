import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize}
  * {
    transition: all 0.3s ease-out;
  }
  div{
    transition: all 0.05s ease-out;
  }

  ;
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
`;