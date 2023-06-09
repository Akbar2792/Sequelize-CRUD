const express = require('express');
const cors = require('cors');
const {port, dbName} = require('./config');

const app = express();

let corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require('./app/models');
db
    .sequelize
    .sync()
    .then(() => {
        console.log('Synced db.');
    })
    .catch((err) => {
        console.log('Failed to sync db : ' + err.message);
    });

// route
const biodata = require('./app/controllers/biodata.controller');

// create profile pesilat method
app.post('/biodata', (req, res) => {
    biodata.create(req, res);
});

// retrive all profile pesilat from database
app.get('/biodata', (req, res) => {
    biodata.findAll(req, res);
});

// find a single profile pesilat with an id
app.get('/biodata/:id', (req, res) => {
    biodata.findOne(req, res);
});

// update a profile pesilat with an id
app.put('/biodata/:id', (req, res) => {
    biodata.update(req, res);
});

// update only one field a profile pesilat with an id
app.patch('/biodata/:id', (req, res) => {
    biodata.patch(req, res);
});

// delete a profile pesilat with an id
app.delete('/biodata/:id', (req, res) => {
    biodata.delete(req, res);
});

// set port, listen for request
const PORT = port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${dbName}: ${PORT}`);
});