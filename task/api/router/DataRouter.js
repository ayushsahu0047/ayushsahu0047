// routes/dataRoutes.js

import express from 'express';
import { addData, getAllData } from '../controllers/dataController.js';



export const Datarouter = express.Router();


 Datarouter.post('/addData', addData);
 Datarouter.get('/getData', getAllData);

