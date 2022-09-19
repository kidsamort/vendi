import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize}
`;