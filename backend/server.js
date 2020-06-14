const  express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


//environment variable
require('dotenv').config();

//express server
const app = express();
const port = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());



//mongo cloud connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/event');
const usersRouter = require('./routes/users');
//const usersRoute = require('./routes/users.router');
//const userLoginRoute = require('./routes/usersLogin.router');


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
// app.use('/Users',usersRoute);
// app.use('/loginUser', userLoginRoute);

//start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});