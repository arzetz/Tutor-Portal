const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FindTutorCardSchema = new Schema({
  type: { type: String },
  category: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  photo: String,
  name: { type: String },
  surname: { type: String },
  description: { type: String, required: true },
});

const FindTutor_Card = mongoose.model("FindTutor_Card", FindTutorCardSchema);
module.exports = FindTutor_Card;