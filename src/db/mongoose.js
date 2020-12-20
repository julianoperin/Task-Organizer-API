const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://julianoperin:123@task-organizer.yb7r4.mongodb.net/task-organizer?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//! USER
// const me = new User({
//   name: "Dennis",
//   email: "jonas@gmail.com",
//   password: "tes",
//   age: 51,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => console.log("Error", err));

//! TASK
// const task = new Tasks({
//   description: "Take the              ",
//   completed: false,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((err) => console.log("error", err));
