const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/users', (req, res) => {
  const response = {
    users: [{ name: 'Sofía' }, { name: 'Mari Carmen' }],
  };
  res.json(response);
});
