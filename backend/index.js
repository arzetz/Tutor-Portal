import express from 'express';
import {loginValidation} from './validations.js';

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

app.post('/auth/register', (req, res) =>{

});
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
