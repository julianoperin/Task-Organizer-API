require("../src/db/mongoose");

const Task = require("../src/models/task");

Task.findByIdAndDelete("5fdfaecf21b20a35d0f42278")
  .then((task) => {
    console.log(task);
    return Task.count({ completed: false });
  })
  .then((result) => {
    console.log("all", result);
  })
  .catch((err) => {
    console.log(err);
  });
