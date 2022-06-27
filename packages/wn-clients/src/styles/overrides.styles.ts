import { MantineTheme } from '@mantine/core';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const overrides = {
  Modal: () => ({
    title: {
      fontSize: '1.8rem',
      fontWeight: 700,
    },
  }),
  Title: (theme: MantineTheme, { element }: { element: Headings }) => ({
    root: {
      color: theme.colors.dark[9],
      [theme.fn.smallerThan('xs')]: {
        fontSize: {
          h1: theme.other.responsiveFontSizes[1],
          h2: theme.other.responsiveFontSizes[2],
          h3: theme.other.responsiveFontSizes[3],
          h4: theme.other.responsiveFontSizes[4],
          h5: theme.other.responsiveFontSizes[5],
          h6: theme.other.responsiveFontSizes[6],
        }[element],
      },
    },
  }),
  Text: (theme: MantineTheme) => ({
    root: {
      [theme.fn.smallerThan('xs')]: {
        fontSize: theme.other.responsiveFontSizes[0],
      },
    },
  }),
  Paper: (theme: MantineTheme) => ({
    root: {
      boxShadow: `0 1px 1px ${theme.colors.gray[5]},0 1px 1px ${theme.colors.gray[5]}`,
    },
  }),
};
