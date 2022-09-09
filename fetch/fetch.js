import fetch from 'node-fetch'
import * as dotenv from 'dotenv' 
dotenv.config({path: '../.env'})

const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=`

const query = `&cuisine=italian&fillIngredients=true`

export const getMenu = async () => {

  const response = await fetch(`${baseUrl}${process.env.API_KEY}${query}`);

  const data = await response.json();

  return createNewArray(data.results)
}

//PLAN TAKE array of objects change to array of objects with only what we need
// we need from dummyData.results[i].title
// - name = dummyData.results[i].title
// - image link = dummyData.results[i].image 
// - dummyData.results[i].missedIngredients.map((item)=> item.originalName)
// - add random price

const createNewArray = (array) => {

  return array.map((item)=> restructureObject(item))

}

const restructureObject = (obj) => {

  const {title, image, missedIngredients} = obj

  const ingredients = missedIngredients.map((item)=> item.originalName)

  const newObj = {
    title, 
    image,
    ingredients: ingredients
  }

  return newObj
  
}
