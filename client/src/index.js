import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log('query cache error => ', error);
      console.log('query cache query => ', query);
      if (query.state.data !== undefined) {
        alert('에러', error.message);
      }
    },
  }),
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
  // </React.StrictMode>
);
