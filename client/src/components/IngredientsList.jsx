import React from 'react';
import IndividualIngredient from './IndividualIngredient.jsx'

class IngredientsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedAllToCart: false
    };
  }
 
  toggleCart() {
  	let newState = !this.state.addedAllToCart;
    this.setState({addedAllToCart: newState}, this.props.addAllItemsMessage);
  };

  render() {
  	var recipeItems = this.props.ingredients.map(ingredient => (
      <IndividualIngredient metricSystem={this.props.metricSystem} key={Math.random() *ingredient.ingredient_id} ingredient={ingredient} locationChecked={this.props.locationChecked} addItemMessage={this.props.addItemMessage} />
  ));
	  return (
	    <div className='list'>
	      {recipeItems}
	      <div className="ingredientWithoutProduct">
	          {this.state.addedAllToCart 
	            ? <img src="http://localhost:5000/checkmark.png" className="plusIcon" style={{cursor: 'pointer', height: "33px", width: "33px"}} onClick = {this.toggleCart.bind(this)} />
	            : <img src="http://localhost:5000/last_ingredient_icon.png" className="plusIcon" style={{cursor: 'pointer', height: "33px", width: "33px"}} onClick = {this.toggleCart.bind(this)} />
	          }
		      <span style={{cursor: 'pointer'}} onClick = {this.toggleCart.bind(this)} >Add all ingredients to list</span>
	        </div>
	    </div>
	  );
	}
}

export default IngredientsList;