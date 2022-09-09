import fetch from 'node-fetch'
import * as dotenv from 'dotenv' 
dotenv.config({path: '../.env'})

console.log(process.env.API_KEY)

const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=`

const query = `&cuisine=italian`

export const getMenu = async () => {

  console.log(`this is our url`, `${baseUrl}${process.env.API_KEY}${query}`)

  const response = await fetch(`${baseUrl}${process.env.API_KEY}${query}`);

  const data = await response.json();

    
  return data
}
