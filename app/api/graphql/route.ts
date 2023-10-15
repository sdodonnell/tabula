import { createYoga } from 'graphql-yoga';
import { schema } from './schema';
import { createContext } from './context';
import { NextRequest, NextResponse } from 'next/server';

const { handleRequest } = createYoga({
  schema,
  context: createContext,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: {
    Response: NextResponse,
    Request: NextRequest
  }
});

export { handleRequest as GET, handleRequest as POST };
