const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConfirmedCardSchema = new Schema({
  type: { type: String },
  category: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  photo: String,
  name: { type: String },
  surname: { type: String },
  description: { type: String },
});

const Confirmed_Card = mongoose.model("Confirmed_Card", ConfirmedCardSchema);
module.exports = Confirmed_Card;
