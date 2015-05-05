const {Collection} = require('../src');
const UserFixture = require('./fixtures/user');

describe('Ball', () => {
  const ball = require('./ball');

  describe('#register', () => {
    let collection;
    before(() => {
      collection = ball.register(UserFixture);
    });

    it('should return new Collection', () => {
      assert.instanceOf(collection, Collection);
    });

    it('should set collection name', () => {
      return assert.eventually.equal(collection.getName(), 'users');
    });
  });
});
