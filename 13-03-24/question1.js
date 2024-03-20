const http = require('http');
const url = require('url');

const users = [
    { username: 'sidhant', password: 'hehe' },
    { username: 'jay', password: 'meow' },
];
function validateCredentials(username, password) {
  return users.some(user => user.username === username && user.password === password);
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;
  const { username, password } = query;

  if (pathname === '/login') {
    if (username && password) {
      if (validateCredentials(username, password)) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Authentication successful');
      } else {
        res.writeHead(401, { 'Content-Type': 'text/plain' });
        res.end('Invalid username or password');
      }
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Username and password are required');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


