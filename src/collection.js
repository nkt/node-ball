class Collection {
  constructor(Model, collection) {
    this.Model = Model;
    this.collection = collection;
  }

  wrap(document) {
    let model = new this.Model();
    Object.assign(model, document);

    return model;
  }

  getName() {
    return this.collection.then((collection) => {
      return collection.collectionName;
    });
  }

  find(query) {
    return this.collection.then((collection) => {
      return collection.find(query).toArrayAsync().map(this.wrap);
    });
  }

  findOne(query) {
    return this.collection.then((collection) => {
      return collection.findOneAsync(query).then(this.wrap);
    });
  }
}

module.exports = Collection;
