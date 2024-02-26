import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
    },
    city: {
      type: String,
    },
    balance: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
