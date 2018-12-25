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
	<li>
	<i className = {this.state.addedToCart ? "fas fa-plus-circle" : "fas fa-check-circle"}
	  onClick = {this.toggleClass.bind(this)}></i>
	  <span>{ingredient.qty} {ingredient.ingredient_metric} {ingredient.ingredient_name} </span>
    {ingredient.product_id ? <ProductSnippet ingredient={ingredient}/> : null}
  	</li>
  	)}
}

export default IndividualIngredient;