import mongoose from 'mongoose';
import util from 'util';
var bcrypt=require('bcrypt');
// config should be imported before importing any other file
import config from './config/config';
import app from './config/express';
const Users=require('./server/models/user.model');

const debug = require('debug')('express-mongoose-es6-rest-api:index');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;
let promises = [];
// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

//create super admin
mongoose.connection.on('connected', function () {
  generateAdmin();
  Promise.all(promises).then(() => {
    // mongoose.connection.close();
  });
});
// print mongoose logs in dev env
if (config.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}
function generateAdmin() {
  promises.push(Users.findOne({
    email: "etic@esi.dz"
  }).then((account) => {
    if (!account) {
      console.log('\n Creating admin account....');
      //crypter le mot de passe
      const rounds=10;
      var key=bcrypt.genSaltSync(rounds);
      var mdp_hash=bcrypt.hashSync('eticCRM',key);
      const admin = {
        nom: 'eticCRM',
        prenom:'superAdmin',
        email: 'etic@esi.dz',
        sexe: 'masculin',
        role: 'superadmin',
        motDePasse: mdp_hash,
        cle:key
      };
      Users.create(admin).then(() => {
        console.log('-- Admin account succefully created');
      })
    }
  }));
}
export default app;
