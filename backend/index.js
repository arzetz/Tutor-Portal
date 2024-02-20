import express from 'express';
import {loginValidation} from './validations.js';
import mongoose from 'mongoose';
import { register } from './controllers/UserContoller.js';
import handleValidationErrors from './utils/handleValidationErrors.js';

mongoose.set("strictQuery", false);

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.mrquvr1.mongodb.net/?retryWrites=true&w=majority')
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

app.post('/auth/login', (req, res) =>{

});

app.post('/auth/register', handleValidationErrors,register);
app.get('/auth/me',  (req, res) =>{

});

app.get('/taks', (req, res) =>{

});
app.get('/tasks/:id', (req, res) =>{

});
app.post('/taskss',  (req, res) =>{

});
app.delete('/tasks/:id',  (req, res) =>{

});
app.patch('/tasks/:id',  (req, res) =>{

});
