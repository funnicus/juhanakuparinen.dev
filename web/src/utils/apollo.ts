import {
  ApolloClient, HttpLink, InMemoryCache,
} from '@apollo/client';

const link = new HttpLink({ uri: 'http://localhost:3001/api/graphql' });

//let's create a new apollo client with a InMemoryCache and the split link
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export default client;