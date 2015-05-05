const {assert} = require('chai');
const {Collection} = require('../src');
const UserFixture = require('./fixtures/user');

describe('Ball', () => {
  const ball = require('./ball');

  describe('#register', () => {
    it('should return new Collection', () => {
      let collection = ball.register(UserFixture);
      assert.instanceOf(collection, Collection);
    });
  });
});
