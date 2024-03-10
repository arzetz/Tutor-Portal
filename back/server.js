const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/mern")
  .then(() => console.log("Connected to db"))
  .catch(console.error);

const Confirmed_Card = require("./models/Confirmed_Card");
const FindStudent_Card = require("./models/FindStudent_Card");
const FindTutor_Card = require("./models/FindTutor_Card");
const Request_Card = require("./models/Request_Card");
const User = require("./models/User");

app.get("/profile", async (req, res) => {
  const confirmedCards = await Confirmed_Card.find();
  res.json(confirmedCards);
});

app.get("/findstudent", async(req, res) => {
  const findStudentCards = await FindStudent_Card.find();
  res.json(findStudentCards);
});

app.get("/findtutor", async(req, res) => {
  const findTutorCards = await FindTutor_Card.find(); 
  res.json(findTutorCards);
})

app.get("/findtutor/:id", async(req, res) =>{
  const findTutorCardsById = await FindTutor_Card.findOne({_id: req.params.id});
  res.json(findTutorCardsById);
})

app.get("/applications", async(req, res) => {
  const requestCards = await Request_Card.find(); 
  res.json(requestCards);
})

app.get("/findstudent/:id", async(req, res) =>{
  const findStudentCardsById = await FindStudent_Card.findOne({_id: req.params.id});
  res.json(findStudentCardsById);
})

app.get("/applications/:id", async(req, res) =>{
  const findRequestCardById = await Request_Card.findOne({_id: req.params.id});
  res.json(findRequestCardById);
})

app.post("/findstudent", async (req, res) => {
  try {
    const findStudentCard = new FindStudent_Card({
      category: req.body.category,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });
    await findStudentCard.save();
    res.json(findStudentCard);
  } catch (err) {
    console.log("Пожалуйста, исправьте данные");
    res.status("Не удалось создать карточку");
  }
});

app.post("/findtutor", async (req, res) => {
  try {
    const findTutorCard = new FindTutor_Card({
      category: req.body.category,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });
    await findTutorCard.save();
    res.json(findTutorCard);
  } catch (err) {
    console.log("Пожалуйста, исправьте данные");
    res.status("Не удалось создать карточку");
  }
});

app.post("/applications", async (req, res) => {
  try {
    const requestCard = new Request_Card({
      date: req.body.date,
      category: req.body.category,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });
    await requestCard.save();
    res.json(requestCard);
  } catch (err) {
    console.log("Пожалуйста, исправьте данные");
    res.status("Не удалось создать карточку");
  }
});

app.post("/profile", async (req, res) => {
  try {
    const confirmedCard = new Confirmed_Card({
      category: req.body.category,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });
    await confirmedCard.save();
    res.json(confirmedCard);
  }
  catch(err){
    console.log("Пожалуйста, исправьте данные");
    res.status("Не удалось создать карточку");
  }
})

app.delete("/delete/:id", async (req, res) => {
  const result = await Request_Card.findByIdAndDelete(req.params.id);

  res.json(result);
})


app.listen(1234, () => console.log("Serv started"));
