import { FC, Fragment, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { WNPageLayout } from '@wn/shared';

interface WithHelmetProps {
  title: string;
  noLayout?: boolean;
  children: ReactNode;
  metaTags?: {
    id: string;
    name: string;
    description: string;
  }[];
}

const WithHelmet: FC<WithHelmetProps> = ({
  metaTags = [],
  title = 'Mi página',
  noLayout,
  children,
}) => {
  return (
    <Fragment>
      <Helmet>
        {metaTags.map(({ id, ...rest }) => (
          <meta key={id} {...rest} />
        ))}
        <title>{title}</title>
      </Helmet>
      {!noLayout ? <WNPageLayout>{children}</WNPageLayout> : children}
    </Fragment>
  );
};

export default WithHelmet;
