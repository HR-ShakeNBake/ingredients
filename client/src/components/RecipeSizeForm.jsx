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
          <div style={{fontSize: "13px", fontFamily: "Source Sans Pro", fontStyle: "italic", marginTop: "10px", marginBottom: "8px", color: "#000000", height: "18px"}}>Original recipe yields 8 servings</div>
            <form onSubmit={this.handleSubmit} className="recipeSizeForm">
              <input type="number" style={{fontSize: "18px", fontFamily: "Source Sans Pro", textAlign: "center", color: "#", height: "34px", marginBottom: "1px", width: "54px"}} value="8" onChange={this.handleChange} className="recipeSizeFormText" />
              <input type="submit" value="Adjust" style={{fontSize: "15px"}} className="recipeSizeSubmit" />
            </form>
          <span className="radioSection">
            <div className="checkboxgroup" style={{marginRight: "24px"}}>
              <input type="radio" name="radio" className="radioButton1" />
              <label style={{marginTop: "12px", fontSize: "12px", color: "#000000"}} for="radioButton1">US</label>
            </div>
            <div className="checkboxgroup" style={{marginRight: "14px"}}>
              <input type="radio" name="radio" className="radioButton2" />
              <label style={{marginTop: "12px", fontSize: "12px", color: "#000000"}} for="radioButton2">Metric</label>
            </div>
          </span>
          </div>
        </div>
      </div>
    )}
}



export default RecipeSizeForm;