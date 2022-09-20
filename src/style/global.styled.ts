import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize}
  * {
    transition: background 0.3s ease-in, color 0.08s ease-in, fill 0.3s ease-in;
  }

  ;
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
`;