import express from 'express';
import mongoose from 'mongoose';
import {UserController, TaskContoller} from './controllers/index.js'; 
import { registerValidation, loginValidation, TaskCreateValidation } from './validations.js';
import { checkAuth, handleValidationErrors} from "./utils/index.js"

mongoose.set("strictQuery", false);

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.mrquvr1.mongodb.net/tutors?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.get('/',(req,res) => {
    res.send('Yo salam')
});

app.listen(1234, (err) => {
    if (err){
        return console.log(err)
    }

    console.log('runninnnnn')
});


app.use(express.json());

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);

app.post('/auth/register', handleValidationErrors, UserController.register);
app.get('/auth/me',  (req, res) =>{

});
app.post('/tasks', checkAuth, TaskCreateValidation, handleValidationErrors, TaskContoller.create);
app.get('/tasks', (req, res) =>{

});
app.get('/tasks/:id', (req, res) =>{

});

app.delete('/tasks/:id',  (req, res) =>{

});
app.patch('/tasks/:id',  (req, res) =>{

});
