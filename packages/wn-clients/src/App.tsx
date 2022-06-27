import { FC, Suspense, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Skeleton } from '@mantine/core';
import { useElementSize, useScrollIntoView } from '@mantine/hooks';
import { Footer, Header, RootRoutes } from 'components';
import { useAuthentication } from 'hooks';
import { useStyles } from './App.styles';

const App: FC = () => {
  const { user, isAuthenticated } = useAuthentication();

  const location = useLocation();

  const navigate = useNavigate();

  const { height: footerHeight, ref } = useElementSize<HTMLDivElement>();

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();

  const { classes } = useStyles({ footerHeight });

  useEffect(() => {
    scrollIntoView();
  }, [location, scrollIntoView]);

  useEffect(() => {
    if (isAuthenticated && location.pathname === '/') {
      navigate('/cliente', { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  return (
    <div className="App" ref={targetRef}>
      {location.pathname !== '/iniciar-sesion' && <Header />}
      <main className={classes.main}>
        <Suspense fallback={<Skeleton height={50} />}>
          <RootRoutes />
        </Suspense>
      </main>
      {location.pathname !== '/iniciar-sesion' && <Footer ref={ref} />}
    </div>
  );
};

export default App;
