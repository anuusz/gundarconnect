const bcrypt = require('bcryptjs');
bcrypt.hash('ganteng', 10).then(console.log);