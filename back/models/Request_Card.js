const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestCardSchema = new Schema({
  type: { type: String },
  date: {type: String},
  category: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  photo: String,
  name: { type: String },
  surname: { type: String },
  description: { type: String, required: true },
});

const Request_Card = mongoose.model("Request_Card", RequestCardSchema);
module.exports = Request_Card;