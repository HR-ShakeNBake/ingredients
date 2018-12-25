import React from 'react';
import ProductSnippet from './ProductSnippet.jsx'

class IndividualIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToCart: true
    };
  }

  toggleClass() {
    const currentState = this.state.addedToCart;
    this.setState({ addedToCart: !currentState });
  };

  render() {
    let ingredient = this.props.ingredient
  	return (
	<li className="productItem">
	<div className="ingredientWithoutProduct"><i className = {this.state.addedToCart ? "fas fa-plus-circle fa-2x" : "fas fa-check-circle fa-2x"}
	  onClick = {this.toggleClass.bind(this)}></i>
	  <span>{ingredient.qty} {ingredient.ingredient_metric} {ingredient.ingredient_name} </span></div>

    {ingredient.product_id && this.props.locationChecked ? <ProductSnippet ingredient={ingredient}/>: null}
  	</li>
  	)}
}

export default IndividualIngredient;