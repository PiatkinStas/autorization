const mongoose = require('mongoose');

const connectDB = async function () {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Slut', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
const checkConnection = () => {
  const state = mongoose.connection.readyState;
  switch (state) {
    case 0:
      console.log('Mongoose connection state: disconnected');
      break;
    case 1:
      console.log('Mongoose connection state: connected');
      break;
    case 2:
      console.log('Mongoose connection state: connecting');
      break;
    case 3:
      console.log('Mongoose connection state: disconnecting');
      break;
    default:
      console.log('Mongoose connection state: unknown');
      break;
  }
};

module.exports = { connectDB, checkConnection };
