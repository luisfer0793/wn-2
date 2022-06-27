import { FC, ReactNode } from 'react';
import { useStyles } from './WNPageLayout.styles';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const {
    classes: { layout },
  } = useStyles();

  return <div className={layout}>{children}</div>;
};

export default PageLayout;
