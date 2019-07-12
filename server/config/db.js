import mongoose from 'mongoose';
import uriUtil from 'mongodb-uri';

switch (process.env.NODE_ENV) {
  case 'production':
    let mongoUri = process.env.MONGO_URI;
    let options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } }

    let mongooseUri = uriUtil.formatMongoose(mongoUri);
    mongoose.connect(mongooseUri, options);
    break;

    
  case 'test':
    mongoose.connect('localhost', 'react-node-project-seed-test');
    break;

    case 'test':
      mongoose.connect('localhost', 'react-node-project-seed-test');
      break;
  
  default:
    if(process.env.NODE_ENV !== 'development') {
      console.warn('Caution! Unrecognized Node environment:', process.env.NODE_ENV, 'Defaulting to development database.');
    }
    mongoose.connect('localhost', 'react-node-project-seed-development');
    break;
};

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('disconnecting', () => {
  console.log('Database', db.name, 'disconnecting.')
});
db.once('open', () => {
  console.log('Connection to', db.name, 'established.');
});

export default db;