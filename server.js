const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const SECRET_KEY = '123456789';
const expiresIn = '1h';

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

// Check if the user exists in database
function isAuthenticated({ username, password }) {
  const db = router.db.getState();
  return (
    db.users.findIndex(
      user => user.email === username && user.password === password
    ) !== -1
  );
}

function isAuthorized(req) {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    verifyToken(token);
    return true;
  } catch (err) {
    return false;
  }
}

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!isAuthenticated({ username, password })) {
    const status = 401;
    const message = 'Login failure';
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ username });
  res.status(200).json({ access_token });
});

server.get('/auth/me', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const decoded = verifyToken(token);
    const db = router.db.getState();
    const user = db.users.find(user => user.email === decoded.username);
    if (!user) throw new Error();
    const me = {
      id: user.id,
      profileImage: user.profileImage,
      name: user.name,
      username: user.email,
      email: user.email,
    };
    res.status(200).json(me);
  } catch (err) {
    const status = 401;
    const message = 'Unauthorized';
    res.status(status).json({ status, message });
  }
});

server.use((req, res, next) => {
  if (isAuthorized(req)) {
    next();
  } else {
    const status = 401;
    const message = 'Unauthorized';
    res.status(status).json({ status, message });
  }
});
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
