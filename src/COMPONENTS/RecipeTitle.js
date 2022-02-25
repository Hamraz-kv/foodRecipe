import React from 'react';
import './RecipeTitle.css'
export default function RecipeTitle({x}) {
  console.log(x)
  return (

    x["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
    !=null &&(
  <div className='recipetitle' onClick={()=>{
    window.open(x["recipe"]["url"])}}>
    
  <img className='recipetitleIMG' src={x["recipe"]["image"]}/>
  <p className='recipetitleLabel'>{x["recipe"]["label"]}</p>
 
  </div>
    )
  )
}
