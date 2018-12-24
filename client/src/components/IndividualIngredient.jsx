import React from 'react';

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
  	return (
	<li>
	<i className = {this.state.addedToCart ? "fas fa-plus-circle" : "fas fa-check-circle"}
	  onClick = {this.toggleClass.bind(this)}></i>
	  <span>{this.props.ingredient.qty} {this.props.ingredient.ingredient_metric} {this.props.ingredient.ingredient_name} </span>
  	</li>
  	)}
}

export default IndividualIngredient;