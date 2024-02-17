import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text:{
        type: String,
        required: true,
        unique: true,
    },
    type:{
        type: String,
        required: true,
    },
    deadline:{
        type: String,
    },
    category:{
        type: Array,
        default:[],
    },
    user:{
        ref: 'User',
        required: true,
    },
    budget_type:{
        type: String,
        required:true,
    },
    budget:{
        type: Number,
    },
    },
    {
        timestamps:true,
    }
);
