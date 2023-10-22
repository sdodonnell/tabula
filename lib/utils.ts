export const GQL_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/graphql'
    : `https://${process.env.VERCEL_URL}/api/graphql`;
