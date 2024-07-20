const express = require('express');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer');
const productRoute = require('./routes/prductRoutes.js');

//middleware
const upload = multer();
app.use(upload.none());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use('/products', productRoute);


mongoose.connect('mongodb+srv://Vinoth:Vino1402@crud.x2rqiwk.mongodb.net/Vinoth_crud?retryWrites=true&w=majority&appName=CRUD')
    .then((res) => {
        console.log('Database Connected Successfully');
        app.listen(3000, () => {
            console.log('Server is Running on port 3000');
        });
    }).catch(err => {
        console.log('err: ', err);
        console.log('Database Connections Failed!');
    })