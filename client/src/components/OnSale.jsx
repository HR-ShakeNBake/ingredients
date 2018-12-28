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
      storeInfo: {},
      gear: false,
     };
  }

  toggleGear() {
    var newState = !this.state.gear
    this.setState({gear: newState})
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
        ? <span>{this.state.gear 
            ? <img src="on_gear.png" className="plusIcon" style={{height: "33px", width: "33px"}} onClick = {this.toggleGear.bind(this)} />
            : <img src="off_gear.png" className="plusIcon" style={{height: "33px", width: "33px"}} onClick = {this.toggleGear.bind(this)} />
          }</span>
        : null
      }
            
      <div className="onSaleExplanation">What's on sale near you.</div>
      {this.props.locationChecked 
        ? <div>{this.state.gear
          ? <div><Form getStoreInfo={this.props.getStoreInfo} />  
          </div>
          : null}
          <StoreDetails scrollToNextStore={this.props.scrollToNextStore} currentStoreInfo={this.props.currentStoreInfo} />
          </div>
        : null 
      }  
        </div>
    );
  }
}

export default OnSale;