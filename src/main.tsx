import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const host = import.meta.env.VITE_API_HOST;
const token = import.meta.env.VITE_API_TOKEN;

const authLink = setContext((_, { headers }) => {
  return { headers: { ...headers, authorization: token ? `Bearer ${token}` : '' } };
});

const httpLink = createHttpLink({ uri: host });
const client = new ApolloClient({ cache: new InMemoryCache(), link: authLink.concat(httpLink) });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
)
