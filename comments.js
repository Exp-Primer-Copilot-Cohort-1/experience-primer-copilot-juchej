// Create web server
// Create a route to handle a GET request to /comments
// Create a route to handle a POST request to /comments
// Create a route to handle a PUT request to /comments
// Create a route to handle a DELETE request to /comments
// Use the comments array from the previous exercise to store comments
// Use the body-parser package to parse the request body
// Use the express.json() middleware to parse the request body

const express = require('express');
const app = express();

const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'BoJack', comment: 'I am a funny horse' },
  { username: 'Diane', comment: 'This is great!' },
  { username: 'Mr. PB', comment: 'I am a funny dog' }
];

app.use(express.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

app.put('/comments', (req, res) => {
  res.send('PUT request received');
});

app.delete('/comments', (req, res) => {
  res.send('DELETE request received');
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});

// Path: index.js
// Create a web server
// Create a route to handle a GET request to /greetings
// Use the res.json() method to send a JSON response
// Send an object as a response
// The object should have a key message with the value 'Hello, stranger!'

const express = require('express');
const app = express();

app.get('/greetings', (req, res) => {
  res.json({ message: 'Hello, stranger!' });
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});

// Path: index.js
// Create a route to handle a GET request to /greetings/:name
// Use req.params to access the name parameter in the URL
// Use the res.json() method to send a JSON response
// Send an object as a response
// The object should have a key message with the value 'Hello, <name>!'
// Replace