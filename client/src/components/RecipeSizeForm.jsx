import React from 'react';
import ProductSnippet from './ProductSnippet.jsx'
import {toggleAddedToCart} from './StateFunctions.js'

class RecipeSizeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metricSystem: true,
      recipeSize: 8
    };
  }


  render() {
    let ingredient = this.props.ingredient;
  	return (
      <div className="box">
        <div className="arrow_box">
          <div className="checkboxes">
            <form onSubmit={this.handleSubmit} className="recipeSizeForm">
              <input type="text" placeholder="8" className="recipeSizeFormText" />
              <input type="submit" value="OK" />
            </form>
          <span>
            <div className="checkboxgroup">
              <input type="radio" name="radio" className="my_radio_button_id1" />
              <label for="my_radio_button_id1">US</label>
            </div>
            <div className="checkboxgroup">
              <input type="radio" name="radio" className="my_radio_button_id2" />
              <label for="my_radio_button_id2">Metric</label>
            </div>
          </span>
          </div>
        </div>
      </div>
    )}
}



export default RecipeSizeForm;