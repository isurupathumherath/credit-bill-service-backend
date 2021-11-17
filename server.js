const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const userRoutes = require('./routes/user');
const authUser = require('./routes/user-login');
const customerRoutes=require('./routes/customer')

// App
const app = express();

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Route Middleware
app.use('/user', userRoutes);
app.use('/auth', authUser);
app.use('/customer',customerRoutes);

// Post
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));