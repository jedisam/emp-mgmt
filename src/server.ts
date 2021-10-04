import express from "express"
import mongoose from 'mongoose'
import cors from "cors"
import 'dotenv/config'

import Employees from './routes/api/employeeRoute'

const app = express();

// Bodyparser middleware
app.use(express.json());

// enable cors
app.use(cors());

// Connect to Datase
const uri: string = `${process.env.db}`;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log(`Succsessfully connected to DB`);
});

// Different routes
app.get('/', (req, res) => {
  res.send('Haloo');
});

app.use('/api/employees', Employees);

const PORT: number = 7000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

module.exports = app;
