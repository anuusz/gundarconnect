const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const { Post, Comment } = require('./models/Post');
const User = require('./models/User');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const profileRoutes = require('./routes/profile');
const savedRoutes = require('./routes/saved');
const path = require('path');
const aboutRoutes = require('./routes/about');
// ...existing code...
const followRoutes = require('./routes/follow');
const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:5000',
    'http://127.0.0.1:5000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['set-cookie']
}));
app.use(bodyParser.json());
app.use('/uploads', express.static(__dirname + '/public/uploads'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/saved', savedRoutes);
app.use('/api/about', aboutRoutes);
const notificationsRoutes = require('./routes/notifications');
app.use('/api/notifications', notificationsRoutes);

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
});


// Socket.io setup
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:5000',
      'http://127.0.0.1:5000'
    ],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
});

// Socket.io logic
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.on('identify', (userId) => {
    socket.join(`user_${userId}`);
  });
});

// io.on('connection', (socket) => {
//   socket.conn.transport.socket.on('headers', (headers) => {
//     headers['Access-Control-Allow-Origin'] = 'http://localhost:5173';
//     headers['Access-Control-Allow-Credentials'] = 'true';
//   });
// });

// Simpan io di app agar bisa diakses dari req.app.get('io')
app.set('io', io);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

