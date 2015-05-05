const Promise = require('bluebird');
const pluralize = require('pluralize');
const mongo = Promise.promisifyAll(require('mongodb'));
const Collection = require('./collection');

class Ball {
  constructor(url) {
    this.db = mongo.connectAsync(url);
    this.collections = new WeakMap();
  }

  close() {
    return this.db.then((db) => db.close());
  }

  register(Model, name) {
    const collectionName = name || pluralize(Model.name).toLowerCase();
    const collectionPromise = this.db.then((db) => {
      return db.collection(collectionName);
    });
    const collection = new Collection(Model, collectionPromise);
    this.collections.set(Model, collection);

    return collection;
  }
}

module.exports = Ball;
