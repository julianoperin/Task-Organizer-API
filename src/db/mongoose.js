const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://julianoperin:123@task-organizer.yb7r4.mongodb.net/task-organizer?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
