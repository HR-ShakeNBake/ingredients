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
  }
 
  render() {
    return (
      <div className="onSaleSection">
      <label htmlFor="normal-switch">
        <span className="onSaleTitle">On Sale</span>
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
      {this.props.locationChecked
        ? <button className="gear" style={this.state.locationForm ? {backgroundColor: "#ffa500" } : {backgroundColor: "#b2b2b2"}}><i className="fas fa-cog"></i></button>
        : null}
      <div className="onSaleExplanation">Find out what's on sale near you</div>
      {this.props.locationChecked
        ? <div><Form getStoreInfo={this.props.getStoreInfo} /> <StoreDetails scrollToNextStore={this.props.scrollToNextStore} currentStoreInfo={this.props.currentStoreInfo} /> </div> 
        : null}
      </div>
    );
  }
}

export default OnSale;