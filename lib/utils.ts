export const GQL_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/graphql'
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`;
