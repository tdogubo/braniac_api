const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const knex = require('knex');
const { handleSignIn} = require('./controllers/signIn');
const { handleRegister } = require('./controllers/register');
const { handleImageInput, handleApiCall} = require('./controllers/image');
const { handleProfileGet } = require('./controllers/profile');

require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: `${process.env.BRANIAC_DB_USER}`,
        password: `${process.env.BRANIAC_DB_PASSWORD}`,
        database: `${process.env.BRANIAC_DB_NAME}`
    }
});

const app = express();



app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(db.users);
})

app.post('/signin', (req, res) => { handleSignIn(req, res, db, bcrypt) })
app.post('/register', (req, res) => { handleRegister(req, res, db, bcrypt) });
app.get('/profile/:id',(req, res) => { handleProfileGet(req, res,db)});
app.put('/image', (req, res) => { handleImageInput(req, res, db) });
app.post('/imageurl', (req, res) => { handleApiCall(req, res) });
 



app.listen(3000, () => {
        console.log('app running on port 3000');
    })