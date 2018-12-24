import React, { Component } from "react";

class StoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }


  render() {
    let store = this.props.currentStoreInfo[0]
    return (
      <div>
      <div>{store.name} </div>
      <div>{store.address} </div>
      <div>{store.city_state_zip} </div>
      </div>
    );
  }
}

export default StoreDetails;