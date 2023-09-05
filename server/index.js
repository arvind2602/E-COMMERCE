import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Function to connect the mongoose

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
