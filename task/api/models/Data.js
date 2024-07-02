// models/Data.js

import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  date: { type: String, required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true }
});

const Data = mongoose.model('Data', dataSchema);

export default Data;
