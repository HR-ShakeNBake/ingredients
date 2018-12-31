import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Summary from './Summary.jsx'
import IngredientsList from './IngredientsList.jsx'
import OnSale from './OnSale.jsx'
import RecipeSizeForm from './RecipeSizeForm.jsx'
import {convertRecipeArray} from './StateFunctions.js'

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [{recipe_name: 'food'}],
      storeIds: [],
      currentStoreIndex: 0,
      currentStoreInfo: [{storeinfo: 'yo'}],
      locationChecked: true,
      servingsForm: false,
      originalRecipeSize: 0,
      recipeSize: 0,
      metricSystem: 'US',
      successMessage: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/recipes/1')
      .then(res => res.json())
      .then(recipe => this.setState({ recipe }))
      .then(() => this.setRecipeSize(this.state.recipe[0].serving_total))
      .then(() => fetch('http://localhost:5000/recipes/1/stores'))
      .then(res => res.json())
      .then(storesArray => this.reduceStoresArray(storesArray))
      .then(storeIds => this.setState({ storeIds }))
      .then(() => this.setOriginalRecipeSize())
      .then(() => this.getStoreInfo())
  }


  setRecipeSize(size, metricSystem) {
    this.setState({recipeSize: size})
  }

  setNewRecipeSize(size, metricSystem, e) {
    e.preventDefault();
    let oldMetricSystem = this.state.metricSystem;
    let newMetricSystem = metricSystem;
    let oldRecipeSize = this.state.recipeSize;
    let newRecipeSize = size;
    this.adjustIngredientPortions(oldMetricSystem, newMetricSystem, oldRecipeSize, newRecipeSize);
  }

  adjustIngredientPortions(oldMetricSystem, newMetricSystem, oldRecipeSize, newRecipeSize) {
    let currentRecipe =  this.state.recipe;
    let newRecipe = convertRecipeArray(currentRecipe, oldMetricSystem, newMetricSystem, oldRecipeSize, newRecipeSize);
    console.log(newRecipe)
    this.setState({recipe: newRecipe}, 
      this.setState({recipeSize: newRecipeSize}, 
        this.createSuccessMessage));
  }

  setOriginalRecipeSize() {
    let size = this.state.recipe[0].serving_total;
    this.setState({originalRecipeSize: size})
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
      .then(() => fetch(`http://localhost:5000/products/${currentStoreId}`))
      .then(res => res.json())
      .then(ingredientsArray => this.reduceIngredientsArray(ingredientsArray))
      .then(recipe => this.setState({recipe}))
  }

  scrollToNextStore() {
    if (this.state.currentStoreIndex < this.state.storeIds.length - 1) {
      var newStoreIndex = this.state.currentStoreIndex + 1
    } else {
      var newStoreIndex = 0;
    } 
      this.setState({currentStoreIndex: newStoreIndex}, () => {
        this.getStoreInfo();
      });
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
    return results;
  }

  toggleLocation(checked) {
    this.setState({ locationChecked: checked });
  }

  toggleServingsForm() {
    let newState = !this.state.servingsForm;
    this.setState({servingsForm: newState});
  }

  createSuccessMessage() {
    this.setState({successMessage: true}, () => {
      setTimeout(() => {this.setState({successMessage: false})}, 2500)
    })
  }

  render() {
    let totalMins = this.state.recipe[0].cook_time + this.state.recipe[0].prep_time;
    let totalHours = Math.floor(totalMins / 60);
    let remainingMins = totalMins % 60;

    return (
      <div className="outerContainer">
        <div className="title">Ingredients
          <Summary servingsFormState={this.state.servingsForm} toggleServingsForm={this.toggleServingsForm.bind(this)} prepHours={totalHours} prepMins={remainingMins} calories={this.state.recipe[0].calories} recipeSize={this.state.recipeSize} />
        </div>
        <div className="container">
        {this.state.successMessage
          ? <div className="successMessage">The ingredient list now reflects serving size.</div>
          : null }
          {this.state.servingsForm
            ? <RecipeSizeForm recipeSize={this.state.recipeSize} originalRecipeSize={this.state.originalRecipeSize} setNewRecipeSize={this.setNewRecipeSize.bind(this)}/>
            : null
          }
          <div className="nav">
            <OnSale 
              currentStoreInfo={this.state.currentStoreInfo} 
              getStoreInfo={this.getStoreInfo.bind(this)} 
              toggleLocation={this.toggleLocation.bind(this)} 
              locationChecked={this.state.locationChecked}
              scrollToNextStore={this.scrollToNextStore.bind(this)} />
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