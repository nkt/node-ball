const {Ball} = require('../src');

const uri = process.env.BALL_TEST_URL || 'mongodb://localhost/ball_test';

module.exports = new Ball(uri);
