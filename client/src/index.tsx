import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeContextProvider } from './context/Theme';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
