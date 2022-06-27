import { createStyles } from '@mantine/core';

interface StylesProps {
  navbarWidth: number
}

export const useStyles = createStyles((theme, { navbarWidth }: StylesProps) => ({
  content: {
    position: 'relative',
    top: 0,
    left: navbarWidth,
    width: `calc(100% - ${navbarWidth}px)`,
    [theme.fn.smallerThan('xs')]: {
      top: 0,
      left: 0,
      width: '100%',
    },
  },
  overlay: {
    height: '100vh',
  },
}));
