import mongoose from 'mongoose';
//import * as mongoose from 'mongoose';
//import "mongoose";

export function newconnect (uri) {
  console.log(uri);
  mongoose.connect(uri);
  mongoose.Promise = global.Promise;
  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });
  require('./user');
};