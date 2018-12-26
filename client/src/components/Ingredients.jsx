import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Summary from './Summary.jsx'
import IngredientsList from './IngredientsList.jsx'
import OnSale from './OnSale.jsx'

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [{recipe_name: 'food'}],
      storeIds: [],
      currentStoreIndex: 0,
      currentStoreInfo: [{storeinfo: 'yo'}],
      locationChecked: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/recipes/1')
      .then(res => res.json())
      .then(recipe => this.setState({ recipe }))
      .then(() => fetch('http://localhost:5000/recipes/1/stores'))
      .then(res => res.json())
      .then(storesArray => this.reduceStoresArray(storesArray))
      .then(storeIds => this.setState({ storeIds }))
      .then(() => console.log(this.state))
  }

  reduceStoresArray(storesArray) {
    var results = [];
    for (var i = 0; i < storesArray.length; i++) {
      !results.includes(storesArray[i].store_id) ? results.push(storesArray[i].store_id) : null
    }
    return results;
  }

  getStoreInfo() {
    let currentStoreId = this.state.storeIds[this.state.currentStoreIndex];
    fetch(`http://localhost:5000/stores/${currentStoreId}`)
      .then(res => res.json())
      .then(storeInfo => this.setState({ currentStoreInfo: storeInfo }))
      .then(() => fetch(`http://localhost:5000/products/1`))
      .then(res => res.json())
      .then(ingredientsArray => this.reduceIngredientsArray(ingredientsArray))
      .then(recipe => this.setState({recipe}))
  }

  reduceIngredientsArray(ingredientsArray) {
    var ingredientIds = [];
    var results = [];
    for (var i = 0; i < ingredientsArray.length; i++) {
      var ingredient = ingredientsArray[i];
      if (!ingredientIds.includes(ingredient.ingredient_id)) {
        ingredientIds.push(ingredient.ingredient_id)
        results.push(ingredient)
      }
    }
    console.log(results)
    return results;
  }

  toggleLocation(checked) {
    this.setState({ locationChecked: checked });
  }

  render() {
    return (
      <div className="outerContainer">
      <div className="title">Ingredients
        <Summary />
      </div>
      <div className="container">
        <div className="nav">
          <OnSale 
            currentStoreInfo={this.state.currentStoreInfo} 
            getStoreInfo={this.getStoreInfo.bind(this)} 
            toggleLocation={this.toggleLocation.bind(this)} 
            locationChecked={this.state.locationChecked} />
        </div>
        <div className="ingredientList">
          <IngredientsList ingredients={this.state.recipe} locationChecked={this.state.locationChecked} />
        </div>
      </div>
      </div>
    );
  }
}

export default Ingredients;