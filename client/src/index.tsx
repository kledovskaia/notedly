import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Loader } from './components/Loader';
import { LoadingContextProvider } from './context/Loading';
import { ThemeContextProvider } from './context/Theme';
import { GlobalStyles } from './styles';

const uri = process.env.REACT_APP_API_URI;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();
const token = localStorage.getItem('notedly-token');

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: token || '',
  },
}));

const client = new ApolloClient({
  // @ts-ignore
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <LoadingContextProvider>
          <App />
          <Loader />
          <GlobalStyles />
        </LoadingContextProvider>
      </ThemeContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
