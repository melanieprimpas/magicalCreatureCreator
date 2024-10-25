// Enable access to .env variables
import dotenv from 'dotenv';
dotenv.config({ path: '../.env', debug: true });
console.log(import.meta.url)

import { Sequelize } from 'sequelize';
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD)
//console.log(import.meta.env.DB_NAME, import.meta.env.DB_USER, import.meta.env.DB_PASSWORD)

// Create a connection object
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
  });

  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
export default sequelize;
