// app.js

import express from 'express';
import mongoose from 'mongoose';
import  { Datarouter } from './router/DataRouter.js'; 
import cors from  'cors'
const app = express();


app.use(express.json());
app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

mongoose.connect("mongodb://localhost:27017/", {

  dbName:"DataList"
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB: ', error.message);
});

// Routes
app.use('/api', Datarouter); 



// Start the server
const PORT = process.env.PORT || 9010;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
