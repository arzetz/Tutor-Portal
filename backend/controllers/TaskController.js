import TaskModel from "../models/Task.js";

export const create = async (req, res) => {
  try {
    const doc = new TaskModel({
      title: req.body.title,
      text: req.body.text,
      type: req.body.type,
      deadline: req.body.deadline,
      category: req.body.category,
      user: req.userId,
      budget_type: req.body.budget_type,
      budget: req.body.budget,
      imageUrl: req.body.imageUrl,
    });

    const post = await doc.save();

    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать карточку",
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find().populate("user").exec();

    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить записи",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const TaskId = req.params.id;

    TaskModel.findOne({ _id: TaskId }).then((task) => {
      res.json(task);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось найти запись",
    });
  }
};

export const update = async (req, res) => {
  try {
    const TaskId = req.params.id;

    await TaskModel.updateOne(
      {
        _id: TaskId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        type: req.body.type,
        deadline: req.body.deadline,
        category: req.body.category,
        user: req.userId,
        budget_type: req.body.budget_type,
        budget: req.body.budget,
        imageUrl: req.body.imageUrl,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Не удалось обновить запись",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const TaskId = req.params.id;
    await TaskModel.findOneAndDelete(TaskId);
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось удалить запись",
    });
  }
};
