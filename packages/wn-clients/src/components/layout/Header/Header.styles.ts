import { createStyles } from '@mantine/core';

interface StylesProps {
  isOpen: boolean;
  isAuthenticated: boolean;
}

export const useStyles = createStyles(
  (theme, { isOpen, isAuthenticated }: StylesProps) => ({
    header: {
      backgroundColor: theme.colors.gray[0],
      color: theme.colors.gray[9],
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },
    container: {
      [theme.fn.largerThan('xs')]: {
        padding: '0 7rem',
      },
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      textTransform: 'uppercase',
      marginRight: isAuthenticated ? 'auto' : theme.spacing.xl,
    },
    list: {
      listStyle: 'none',
    },
    listItem: {
      marginRight: theme.spacing.md,
    },
    asLink: {
      display: 'block',
      fontWeight: 500,
    },
    spaceBetween: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    sidebar: {
      position: 'fixed',
      display: 'flex',
      padding: theme.spacing.xl,
      height: `calc(100vh - 70px)`,
      width: '100%',
      top: 70,
      left: 0,
      zIndex: 10,
      opacity: isOpen ? 1 : 0,
      transition: 'transform linear 300ms, opacity linear 300ms',
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      color: theme.colors.dark[9],
      backgroundColor: theme.colors.gray[1],
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    sidebarItem: {
      marginTop: 16,
      marginBottom: 16,
    },
    copyright: {
      textAlign: 'center',
      fontSize: '1.3rem !important',
    },
  }),
);
