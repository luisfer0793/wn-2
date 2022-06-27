import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  wrapper: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    display: 'inline-block',
    width: '50rem',
    [theme.fn.smallerThan('xs')]: {
      width: '90%',
    },
  },
}));
