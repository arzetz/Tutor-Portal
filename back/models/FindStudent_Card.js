const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FindStudentCardSchema = new Schema({
  type: { type: String },
  category: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  photo: String,
  name: { type: String },
  surname: { type: String },
  description: { type: String, required: true },
});

const FindStudent_Card = mongoose.model("FindStudent_Card", FindStudentCardSchema);
module.exports = FindStudent_Card;