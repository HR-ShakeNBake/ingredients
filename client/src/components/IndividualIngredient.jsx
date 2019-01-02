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

  toggleClass() {
    let newState = !this.state.addedToCart
    this.setState({addedToCart: newState});
  };


  render() {
    let ingredient = this.props.ingredient;
  	return (
	<li className="productItem">
    {(!this.props.locationChecked || (this.props.locationChecked && !ingredient.ps_product_id )) 
      ?  <div className="ingredientWithoutProduct">
          {this.state.addedToCart 
            ? <img src="checkmark.png" className="plusIcon" style={{cursor: 'pointer', height: "33px", width: "33px"}} onClick = {this.toggleClass.bind(this)} />
            : <img src="plus_icon.png" className="plusIcon" style={{cursor: 'pointer', height: "33px", width: "33px"}} onClick = {this.toggleClass.bind(this)} />
          }

          {this.props.metricSystem === 'US' 
            ? <span onClick = {this.toggleClass.bind(this)} style={{cursor: 'pointer'}} >{ingredient.qty} {ingredient.ingredient_metric} {ingredient.ingredient_name} </span>
            : <span onClick = {this.toggleClass.bind(this)} style={{cursor: 'pointer'}} >{ingredient.qty2} {ingredient.ingredient_metric2} {ingredient.ingredient_name} </span>
          }
        </div>
      : <div className="ingredientWithProduct">
          {this.state.addedToCart 
            ? <img src="checkmark.png" className="plusIcon" style={{cursor: 'pointer', height: "33px", width: "33px"}} onClick = {this.toggleClass.bind(this)} />
            : <img src="plus_icon.png" className="plusIcon" style={{cursor: 'pointer', height: "33px", width: "33px"}} onClick = {this.toggleClass.bind(this)} />
          }
          {this.props.metricSystem === 'US' 
            ? <span onClick = {this.toggleClass.bind(this)} style={{cursor: 'pointer'}} >{ingredient.qty} {ingredient.ingredient_metric} {ingredient.ingredient_name} </span>
            : <span onClick = {this.toggleClass.bind(this)} style={{cursor: 'pointer'}} >{ingredient.qty2} {ingredient.ingredient_metric2} {ingredient.ingredient_name} </span>
          }
          <ProductSnippet ingredient={ingredient}/>
        </div>
    }
  </li>
    )}
}



export default IndividualIngredient;