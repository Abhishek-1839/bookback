const express = require('express');
const userRouter = require('./routes/userRoutes');

// create a new express app
const app = express();

// use the routers
app.use('/api/v1/admin/users', userRouter);

// export the app
module.exports = app;