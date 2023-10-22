import { createYoga } from 'graphql-yoga';
import express from 'express';

import { schema } from './graphql/schema';
import { createContext } from './graphql/context';

const yoga = createYoga({
  schema,
  context: createContext
});

var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.use('/graphql', yoga);

app.listen(4000, () => {
  console.log('Listening on port 4000: http://localhost:4000');
});
