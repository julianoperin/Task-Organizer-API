const express = require("express");
require("./db/mongoose");
const User = require("./models/user"); //? router
const Task = require("./models/task"); //? router

const userRouter = require("./routers/user"); //? router
const taskRouter = require("./routers/task"); //? router

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter); //? router
app.use(taskRouter); //? router

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
