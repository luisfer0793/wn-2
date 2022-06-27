import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';

import { ModalsProvider } from '@mantine/modals';
import { Global, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import App from './App';

import { theme } from './styles/theme.styles';
import { globalStyles } from './styles/global.styles';
import { overrides } from './styles/overrides.styles';
import { store, persistor } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={theme}
            styles={overrides}
          >
            <ModalsProvider modalProps={{ transition: 'slide-up' }}>
              <NotificationsProvider autoClose={6000}>
                <Global styles={globalStyles} />
                <App />
                <ReactQueryDevtools initialIsOpen={false} />
              </NotificationsProvider>
            </ModalsProvider>
          </MantineProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>,
);
