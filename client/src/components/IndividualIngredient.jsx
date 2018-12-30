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
	<div className="ingredientWithoutProduct"><i className = {this.state.addedToCart ?  "fas fa-check-circle fa-2x" : "fas fa-plus-circle fa-2x"}
	  onClick = {this.toggleClass.bind(this)}></i>
	  <span>{ingredient.qty} {ingredient.ingredient_metric} {ingredient.ingredient_name} </span></div>

    {ingredient.product_id && this.props.locationChecked ? <ProductSnippet ingredient={ingredient}/>: null}
  	</li>
  	)}
}

export default IndividualIngredient;