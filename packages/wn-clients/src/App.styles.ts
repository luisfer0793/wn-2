import { createStyles } from '@mantine/core';

interface StylesProps {
  footerHeight: number;
}

export const useStyles = createStyles(
  (theme, { footerHeight }: StylesProps) => ({
    main: {
      minHeight: `calc(100vh - 70px - calc(${footerHeight}px + 14rem))`,
    },
  }),
);
