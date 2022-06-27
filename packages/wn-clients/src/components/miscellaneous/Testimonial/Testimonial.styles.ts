import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  root: {
    paddingBottom: 0,
  },
  quote: {
    fontSize: '1.5rem',
    color: theme.colors.dark[3],
    textAlign: 'left',
  },
  title: {
    marginLeft: '6.2rem',
    fontStyle: 'italic',
    fontSize: '1.4rem',
    color: theme.colors.dark[2],
    textAlign: 'left',
  },
  cite: {
    color: theme.colors.wnGreen[8],
    fontWeight: 600,
    textAlign: 'left',
  },
}));
