const Promise = require('bluebird');
const pluralize = require('pluralize');
const MongoDb = Promise.promisifyAll(require('mongodb'));
const Collection = require('./collection');

class Ball {
  constructor(url) {
    this.db = MongoDb.connectAsync(url);
    this.collections = new WeakMap();
  }

  close() {
    return this.client.then((db) => db.close());
  }

  register(Model, name) {
    const collectionName = name || pluralize(Model.name).toLowerCase();
    const collectionPromise = this.db.then((db) => {
      return db.collectionAsync(collectionName)
    });
    const collection = new Collection(Model, collectionPromise);
    this.collections.set(Model, collection);

    return collection;
  }

  getRepository(entity) {
    return this.models.get(entity.constructor);
  }
}

module.exports = Ball;
