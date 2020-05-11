import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    storySort: (a, b) => {
      if (a[0].includes('Components')) {
        if (a[0].includes('Overview')) {
          return -1;
        }

        return 0;
      }
      return 1;
    },
  },
});
