import * as http from 'http';
import ip from 'ip';
import cors from 'cors';
import bodyParser from 'body-parser';

import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const base_context = '/api/v1/myApp';

// ping endpoint to check if API is up and running
app.get(`${base_context}/ping`, async (req: Request, res: Response) => {
  res.json({ pong: 'pong' });
});

// get all users
app.get(`${base_context}/users/all/`, async (req: Request, res: Response) => {
  const users = [];
  for (let index = 0; index < 15; index++) {
    users.push({
      id: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      name: (Math.random() + 1).toString(36).substring(2, 7),
      age: Math.floor(Math.random() * (80 - 18 + 1)) + 18,
      joinDate: new Date().toISOString(),
    });
  }
  res.json(users);
});

// get a user by ID
app.get(`${base_context}/users/user/:id`, async (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    id,
    name: (Math.random() + 1).toString(36).substring(2, 7),
    age: Math.floor(Math.random() * (80 - 18 + 1)) + 18,
    joinDate: new Date().toISOString(),
  });
});

// get all books
app.get(`${base_context}/books/all/`, async (req: Request, res: Response) => {
  const books = [];
  for (let index = 0; index < 15; index++) {
    books.push({
      id: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      name: (Math.random() + 1).toString(36).substring(2, 7),
      age: Math.floor(Math.random() * (80 - 18 + 1)) + 18,
      joinDate: new Date().toISOString(),
    });
  }
  res.json(books);
});

// get a book by ID
app.get(`${base_context}/books/book/:id`, async (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    id,
    title: (Math.random() + 1).toString(36).substring(2, 7),
    isbn: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000,
    author: (Math.random() + 1).toString(36).substring(2, 7),
    joinDate: new Date().toISOString(),
  });
});


// creating a server to run the API
const server = http.createServer(app);

const port = 8080;
console.warn('starting server on port ', port);
server.listen(port);

const ipAddress = ip.address();
console.warn(`running the server at http://${ipAddress}:${port}`);
