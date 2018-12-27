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
    let ingredient = this.props.ingredient;
    let product;
    if (ingredient.product_deal !== null) {
      product = <div className="productSnippet">
  <img className="productPhoto"
      src={ingredient.product_url}
      alt="new"
      />
    <div>{ingredient.product_name}</div>
    <div className="productDeal">{ingredient.product_deal}</div> 
      </div>
    } else {
      product =  null
    }
  	return (product)}
}

export default ProductSnippet;