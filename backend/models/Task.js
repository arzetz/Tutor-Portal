import mongoose from "mongoose";


const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text:{
        type: String,
        required: true,
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
        type: mongoose.Schema.Types.ObjectId,
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
    imageUrl: String,
    },
    {
        timestamps:true,
    }
);

export default mongoose.model('Task', TaskSchema);