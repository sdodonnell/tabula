import { createYoga } from 'graphql-yoga';
import { schema } from './schema';
import { createContext } from './context';

export const handleRequest = createYoga({
  schema,
  context: createContext,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response }
});
