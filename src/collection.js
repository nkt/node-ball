class Collection {
  constructor(Model, collection) {
    this.Model = Model;
    this.collection = collection;
    this._wrap = (document) => {
      let model = new Model();
      Object.assign(model, document);

      return model;
    };
  }

  find(query) {
    return this.collection.then((collection) => {
      return collection.find(query).toArrayAsync().map(this._wrap);
    });
  }

  findOne(query) {
    return this.collection.then((collection) => {
      return collection.findOneAsync(query).then(this._wrap);
    });
  }  
}

module.exports = Collection;
