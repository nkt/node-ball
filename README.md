Ball
====

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
