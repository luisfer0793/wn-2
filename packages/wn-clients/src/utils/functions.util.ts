import { MantineColor, MantineTheme } from '@mantine/core';

interface ColorProps {
  success: MantineColor;
  warning: MantineColor;
  info: MantineColor;
  error: MantineColor;
}

export const notificationStyler =
  (variant: 'success' | 'warning' | 'info' | 'error') =>
  (theme: MantineTheme) => {
    const color =
      {
        success: theme.colors.green,
        warning: theme.colors.orange,
        info: theme.colors.cyan,
        error: theme.colors.red,
      }[variant as unknown as keyof ColorProps] || theme.colors.grape;

    return {
      root: {
        backgroundColor: color[1],
        borderColor: color[2],
        '&::before': {
          backgroundColor: color[7],
          width: '.3rem',
        },
      },
      title: {
        fontWeight: 700,
        color: color[7],
      },
      description: {
        color: theme.colors.dark[4],
      },
      closeButton: {
        color: theme.colors.dark[4],
        '&:hover': {
          backgroundColor: color[2],
        },
      },
    };
  };
