const express = require('express');
const app = express();
const productRoute = require('./routes/prductRoutes.js');
const connectDB = require('./db.js');
const port = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const path = require('path');

// image stored in local(public folder)
app.use('/static', express.static('public'));

//routes
app.use('/products', productRoute);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is Running on port ${port}`);
    });
});