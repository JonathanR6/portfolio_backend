const { connect } = require('mongoose');

const { HOST_DB } = require('../config/environment');

const connectDB = async () => {
  const { connection } = await connect(HOST_DB);
  console.log(`connected to the database: ${connection.name}`);
};

module.exports = connectDB;
