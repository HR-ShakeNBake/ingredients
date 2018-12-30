import React from 'react';
import IndividualIngredient from './IndividualIngredient.jsx'

const IngredientsList = (props) => {
 
  const recipeItems = props.ingredients.map(ingredient => (
      <IndividualIngredient key={ingredient.ingredient_id} ingredient={ingredient} locationChecked={props.locationChecked}/>
  ));


  return (
    <div className='list'>
      {recipeItems}
    </div>
  );
}

export default IngredientsList;