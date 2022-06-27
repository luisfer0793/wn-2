import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  footer: {
    paddingTop: '7rem',
    paddingBottom: '7rem',
    color: theme.colors.gray[5],
    backgroundColor: theme.colors.wnGreen[8],
    [theme.fn.smallerThan('xs')]: {
      paddingTop: '4rem',
      paddingBottom: '4rem',
    },
  },
  grid: {
    display: 'grid',
    gap: '1rem',
    gridTemplateAreas: '"copyright company support media"',
    [theme.fn.smallerThan('xs')]: {
      gap: '3rem',
      gridTemplateAreas:
        '"company company company" "support support support" "media media media" "copyright copyright copyright"',
    },
  },
  areaCopyright: {
    gridArea: 'copyright',
    [theme.fn.smallerThan('xs')]: {
      textAlign: 'center',
    },
  },
  areaCompany: {
    gridArea: 'company',
  },
  areaSupport: {
    gridArea: 'support',
  },
  areaMedia: {
    gridArea: 'media',
  },
  title: {
    marginBottom: theme.spacing.xs,
    color: theme.colors.gray[0],
  },
  text: {
    fontSize: '1.4rem',
    [theme.fn.smallerThan('xs')]: {
      fontSize: '1.3rem !important',
    },
  },
  list: {
    listStyle: 'none',
    [theme.fn.smallerThan('xs')]: {
      borderLeft: `.1rem solid ${theme.colors.wnGreen[6]}`,
      paddingLeft: theme.spacing.md,
    },
  },
  listItem: {
    '&:not(:last-child)': {
      marginBottom: '.5rem',
    },
  },
}));
