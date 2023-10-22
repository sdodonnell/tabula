export const GQL_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/graphql'
    : `https://${process.env.VERCEL_URL}/api/graphql`;
