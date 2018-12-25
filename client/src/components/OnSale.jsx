import React, { Component } from "react";
import Switch from "react-switch";
import Form from './Form.jsx';
import StoreDetails from './StoreDetails.jsx'
 
class OnSale extends Component {
  constructor() {
    super();
    this.state = { 
      checked: false,
      locationForm: false,
      storeInfo: {}
     };
    // this.handleChange = this.handleChange.bind(this);
  }
 
  // handleChange(checked) {
  //   this.setState({ checked });
  // }
 
  render() {
    return (
      <div className="onSaleSection">
      <label htmlFor="normal-switch">
        <span>Switch with default style</span>
        <Switch
          onChange={this.props.toggleLocation}
          checked={this.props.locationChecked}
          id="normal-switch"
          handleDiameter={18}
          width={70}
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: '#b2b2b2',
                paddingRight: 2
              }}
            >
              Off
            </div>
          }
          offColor="#fcfcfc"
          offHandleColor="#b2b2b2"
          onColor="#FFA500"
          borderColor="#cfcfcf"
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "white",
                paddingRight: 2
              }}
            >
              On
            </div>
          }          
        />
      </label>
      <button className="gear" style={this.state.locationForm ? {backgroundColor: "#ffa500" } : {backgroundColor: "#b2b2b2"}}><i className="fas fa-cog"></i></button>
      {this.props.locationChecked
        ? <div><Form getStoreInfo={this.props.getStoreInfo} /> <StoreDetails currentStoreInfo={this.props.currentStoreInfo} /> </div> 
        : null}
      </div>
    );
  }
}

export default OnSale;