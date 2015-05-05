Ball
====
[![Circle CI](https://circleci.com/gh/nkt/node-ball/tree/master.svg?style=svg)](https://circleci.com/gh/nkt/node-ball/tree/master)

Simple MongoDB ODM

Usage
-----

```js
const {Ball} = require('ball');

let db = new Ball('mongodb://localhost/db');

class User {
  getFullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}

db.find({}).map((user) => {
  console.log({
    fullName: user.getFullName()
  });
}).catch((err) => {
  // error handling
})
```

License
-------
[MIT](LICENSE)
