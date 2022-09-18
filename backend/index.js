import express from 'express';
import users from './routers/users.js';
const app = express();
const port = 5000;

// for req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  console.log('hello owrld');
  res.send('<h3>Home</h3>');
});

app.get('/about', (req, res) => {
  res.send('About');
});
app.use(users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
