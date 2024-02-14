import express from 'express';
import {loginValidation} from './validations';

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

app.get('/posts', (req, res) =>{

});
app.get('/posts/:id', (req, res) =>{

});
app.post('/posts',  (req, res) =>{

});
app.delete('/posts/:id',  (req, res) =>{

});
app.patch('/posts/:id',  (req, res) =>{

});
