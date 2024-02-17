import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Surname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    number:{
        type: Number,
        required: true,
        unique: true,
    },
    passwordHash:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
    },
    avatarUrl:{
        type: String,
    },
    city:{
        type: String,
    },
    balance:{
        type:Number,
    },
    },
    {
        timestamps:true,
    },

);
