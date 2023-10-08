//External Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material';


//Local Dependencies
import App from './App.tsx'


const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#333366',
    },
    secondary: {
      main: '#ffff33'
    },
    info: {
      main: '#f4f4f4'
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <Provider store={store}>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
