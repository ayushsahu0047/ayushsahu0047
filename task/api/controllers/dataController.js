// controllers/dataController.js

import Data from "../models/Data.js";

// POST method to add data
const addData = async (req, res) => {
  const { date, name, amount } = req.body;

  try {
    // Create a new instance of the Data model
    const newData = new Data({ date, name, amount });

    // Save the new data to the database
    await newData.save();

    // Respond with the saved data
    res.status(201).json(newData);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
};

// GET method to retrieve all data
const getAllData = async (req, res) => {
  try {
    // Fetch all data from the database
    const allData = await Data.find();

    // Respond with the fetched data
    res.status(200).json(allData);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
};

export { addData, getAllData };
