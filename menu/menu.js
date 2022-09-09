import express from "express";
const router = express.Router();

import * as dotenv from 'dotenv'
dotenv.config()

import {getMenu} from '../fetch/fetch.js '

/* GET users listing. */
router.get("/", async function (req, res, next) {

  const data = await getMenu()

  console.log(`this is data`, data)
  
  res.json({ message: data });
});

export default router;
