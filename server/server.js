require('dotenv').config();
const path = require('path');
const express = require("express");
const mongoose = require('mongoose');
// const cors = require('cors');
const cookieparser = require('cookie-parser');
const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');

const app = express();

app.use(express.json())
// app.use(cors());
app.use(cookieparser());

// app.use(express.static("public"));
app.use('/api', authRouter);
app.use('/api', userRouter);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});


// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/client/public/index.html'));
// });

const port = process.env.PORT || 5000;
// const URL = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://login:loginproject@cluster0.qkj5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if(err) throw err;
    console.log('MongoDb is connected')
});

// const buildPath = path.join(__dirname, '..', 'build');
// app.use(express.static(buildPath));


// const buildPath = path.join(__dirname, '/client/build');
// app.use(express.static(buildPath));

// app.get("/", (req, res) => {
//     res.status(500).send("Hello World");
// });

// MONGO_URI = mongodb+srv://login:loginproject@cluster0.qkj5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.listen(port, () => {
    console.log(`app is running on ${port}`);
});