import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('listagem de usuarios');

  response.json([
    'Diego',
    'Felipe',
    'Jessy',
    'Clarice'
  ]);
});

app.listen(3333);