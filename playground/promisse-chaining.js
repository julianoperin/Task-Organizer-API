require("../src/db/mongoose");

const User = require("../src/models/user");

User.findByIdAndUpdate("5fdeacd437b1de60dc02eb3a", { age: 20 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log("RESULT", result);
  })
  .catch((err) => {
    console.log(err);
  });
