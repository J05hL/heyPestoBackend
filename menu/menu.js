import express from "express";
const router = express.Router();

import * as dotenv from 'dotenv'
dotenv.config()

import {getMenu} from '../fetch/fetch.js '

router.get("/", async function (req, res, next) {

  const data = await getMenu()
 
  try {
    res.status(201).json({ success: true, payload: data });
  } catch (err) {
    res.status(400).json({success: false, message: err.message });
  }
  
});

export default router;
