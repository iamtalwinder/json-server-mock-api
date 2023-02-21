const jsonServer = require('json-server');
const { DB_PATH, PORT } = require('./config');
const authRoutes = require('./routes/auth');
const authenticate = require('./middlewares/authenticate');

const router = jsonServer.router(DB_PATH);
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(authRoutes);

// Add authentication to routes in db.json
server.use('/users', authenticate);
server.use('/posts', authenticate);
server.use('/comments', authenticate);

// Custom routes
server.get('/protected', authenticate, (req, res) => {
  res.status(200).send('Protected data');
});

server.use(router);

server.listen(PORT, () => {
  console.log('Server is running');
});
