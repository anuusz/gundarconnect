const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const path = require('path');

const sequelize = require('./config/database');
const { Post, Comment } = require('./models/Post');
const User = require('./models/User');

=======
const sequelize = require('./config/database');
const { Post, Comment } = require('./models/Post');
const User = require('./models/User');
<<<<<<< HEAD
=======

>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const profileRoutes = require('./routes/profile');
<<<<<<< HEAD
const savedRoutes = require('./routes/saved');
// const searchRoutes = require('./routes/search');
const searchRoutes = require('./routes/search');
const aboutRoutes = require('./routes/about');
const notificationsRoutes = require('./routes/notifications');
const followRoutes = require('./routes/followRoutes');
const app = express();

app.use(express.json());
// ✅ Middleware: aktifkan CORS terlebih dahulu
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use('/api/follow', followRoutes)
app.use(bodyParser.json());
app.use('/api', followRoutes);
app.use('/api/follow', require('./routes/followRoutes'))
// ✅ Static folder
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// ✅ Routes
=======
<<<<<<< HEAD
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
=======

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737

// Routes
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/profile', profileRoutes);
<<<<<<< HEAD
app.use('/api/saved', savedRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/search', searchRoutes);
// app.use('/api/search', require('./routes/search'));

// ✅ Socket.io setup
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

=======
<<<<<<< HEAD
app.use('/api/saved', savedRoutes);
app.use('/api/about', aboutRoutes);
const notificationsRoutes = require('./routes/notifications');
app.use('/api/notifications', notificationsRoutes);
=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
});

<<<<<<< HEAD

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
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.on('identify', (userId) => {
    socket.join(`user_${userId}`);
  });
});

<<<<<<< HEAD
// ✅ Simpan io instance di app
app.set('io', io);

// ✅ Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
  
  // ✅ Jalankan server
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
});
=======
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

=======
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
