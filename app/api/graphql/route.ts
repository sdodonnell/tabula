import { createYoga } from 'graphql-yoga';
import { schema } from './schema';
import { createContext } from './context';

const handleRequest = createYoga({
  schema,
  context: createContext,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response }
});

export { handleRequest as GET, handleRequest as POST };
