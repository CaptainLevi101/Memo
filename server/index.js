import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import  indexRouter  from './routes/index.js';

const app = express(); //first initialize this app

app.use(bodyParser.json({ limit: '30mb', extended: true })); //middleware to parse the incoming json data
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })); //middleware to parse the incoming url-encoded datawsed when submitting HTML form
app.use(cors());
app.use('/', indexRouter);
const CONNECTION_URL = "mongodb+srv://Ashish:Ashish123@bloghead.a1juzd8.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
mongoose.connect
    (CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`)))
    .catch((error) => console.log(`Server Error: ${error}`));

// mongoose.set('useFindAndModify',false);


//upto this this waas the basice setup needed for backend

