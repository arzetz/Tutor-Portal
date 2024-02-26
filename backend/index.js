import express from "express";
import mongoose from "mongoose";
import { UserController, TaskController } from "./controllers/index.js";
import {
  registerValidation,
  loginValidation,
  TaskCreateValidation,
} from "./validations.js";
import { checkAuth, handleValidationErrors } from "./utils/index.js";

mongoose.set("strictQuery", false);
mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.mrquvr1.mongodb.net/tutors?retryWrites=true&w=majority'
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.get("/", (req, res) => {
  res.send("Yo salam");
});

app.listen(1234, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("runninnnnn");
});

app.use(express.json());

app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);

app.post(
  "/auth/register",
  handleValidationErrors,
  registerValidation,
  UserController.register
);

app.get("/auth/me", checkAuth, UserController.getInfo);

app.post(
  "/tasks",
  checkAuth,
  TaskCreateValidation,
  handleValidationErrors,
  TaskController.create
);

app.get("/tasks", TaskController.getTasks);
app.get("/tasks/:id", TaskController.getOne);

app.delete("/tasks/:id", checkAuth, TaskController.remove);
app.patch(
  "/tasks/:id",
  checkAuth,
  TaskCreateValidation,
  handleValidationErrors,
  TaskController.update
);

//app.post('/upload') // фотокарточки
