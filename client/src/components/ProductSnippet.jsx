import React from 'react';

class ProductSnippet extends React.Component {
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
	<div className="productSnippet">
    {ingredient.product_url} {ingredient.product_name} {ingredient.product_deal}
  <img 
      src={ingredient.product_url}
      alt="new"
      />
      </div>
  	)}
}

export default ProductSnippet;