import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  wrapper: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.fn.smallerThan('xs')]: {
      display: 'block',
    },
  },
  formTitle: {
    fontSize: '2.4rem',
    color: theme.colors.dark[9],
  },
  formSubtitle: {
    color: theme.colors.dark[2],
    marginBottom: '4rem',
  },
  formBrand: {
    fontSize: '3.2rem',
  },
  formSection: {
    height: '100vh',
    [theme.fn.smallerThan('xs')]: {
      backgroundImage:
        'linear-gradient(to right bottom, rgba(255, 255, 255, .9), rgba(255, 255, 255, .9)), url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80")',
      backgroundPosition: 'top right',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  },
  bannerSection: {
    backgroundImage:
      'linear-gradient(to right bottom, rgba(209, 255, 244, .1), rgba(219, 255, 209, .1)), url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80")',
    backgroundPosition: 'top right',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  stack: {
    marginBottom: theme.spacing.xl,
  },
}));
