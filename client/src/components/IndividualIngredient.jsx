import React from 'react';
import ProductSnippet from './ProductSnippet.jsx'
import {toggleAddedToCart} from './StateFunctions.js'

class IndividualIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToCart: false
    };
  }

  toggleClass(state) {
    this.setState(toggleAddedToCart(this.state))
  };

  render() {
    let ingredient = this.props.ingredient;
  	return (
	<li className="productItem">
    {(!this.props.locationChecked || (this.props.locationChecked && !ingredient.ps_product_id )) 
      ?  <div className="ingredientWithoutProduct">
          {this.state.addedToCart 
            ? <img src="checkmark.png" className="plusIcon" style={{height: "33px", width: "33px"}} onClick = {this.toggleClass.bind(this)} />
            : <img src="plus_icon.png" className="plusIcon" style={{height: "33px", width: "33px"}} onClick = {this.toggleClass.bind(this)} />
          }
	      <span>{ingredient.qty} {ingredient.ps_product_id} {ingredient.ingredient_metric} {ingredient.ingredient_name} </span>
        </div>
      : <div className="ingredientWithProduct">
          {this.state.addedToCart 
            ? <img src="checkmark.png" className="plusIcon" style={{height: "33px", width: "33px"}} onClick = {this.toggleClass.bind(this)} />
            : <img src="plus_icon.png" className="plusIcon" style={{height: "33px", width: "33px"}} onClick = {this.toggleClass.bind(this)} />
          }
          <span>{ingredient.qty} {ingredient.ingredient_metric} {ingredient.ingredient_name} </span>
          <ProductSnippet ingredient={ingredient}/>
        </div>
    }
  </li>
    )}
}



export default IndividualIngredient;