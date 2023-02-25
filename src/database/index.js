const { connect } = require('mongoose');

const { HOST_DB } = require('../config/environment');

const connectDB = async () => {
  try {
    const { connection } = await connect(HOST_DB);
    console.log(`connected to the database: ${connection.name}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
