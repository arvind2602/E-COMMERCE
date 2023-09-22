import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import auth from './routes/auth.js';
import moongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

moongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true })
    .then(() => app.listen(5000))
    .catch((err) => console.error(err.message))

//  Routes for auth 
app.use('/auth', auth)


