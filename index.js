const express = require('express');
const app = express();
const multer = require('multer');
const productRoute = require('./routes/prductRoutes.js');
const connectDB = require('./db.js');
const port = process.env.PORT || 3000;

//middleware
const upload = multer();
app.use(upload.none());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use('/products', productRoute);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is Running on port ${port}`);
    });
});