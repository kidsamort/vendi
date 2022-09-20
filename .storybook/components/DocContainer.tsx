import React from 'react';
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

// @ts-ignore
export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();

  return (
    // @ts-ignore
    <BaseContainer
      context={{
        ...context,
        storyById: (id) => {
          const storyContext = context.storyById(id);
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                theme: dark ? themes.dark : themes.light,
              },
            },
          };
        },
      }}>
      {children}
    </BaseContainer>
  );
};