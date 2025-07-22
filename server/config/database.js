const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.PG_DATABASE || 'gundarconnect',
  process.env.PG_USER || 'postgres',
  process.env.PG_PASSWORD || '1234',
  {
    host: process.env.PG_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.PG_PORT || 5432,
    logging: false
  }
);

<<<<<<< HEAD

=======
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
module.exports = sequelize;
