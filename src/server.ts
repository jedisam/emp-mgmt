import express from "express"
import mongoose from 'mongoose'
import cors from "cors"
import path from 'path'
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


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/employees', Employees);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

module.exports = app;
