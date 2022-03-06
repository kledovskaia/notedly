import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Loader } from './components/Loader';
import { LoadingContextProvider } from './context/Loading';
import { ThemeContextProvider } from './context/Theme';
import { GlobalStyles } from './styles';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache: new InMemoryCache(),
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
