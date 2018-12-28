import React, { Component } from "react";

class StoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  toggleStore() {
    this.props.scrollToNextStore();
  }


  render() {
    let store = this.props.currentStoreInfo[0];
    let storeSummary = store.photo_url !== undefined
    ? <div className="storeSnippet">
      <img className="storePhoto"
      src={store.photo_url}
      />
      <div className="storeTitle">{store.name} </div>
      <div className="chevronArrow"><img src="store_arrow.png" className="storeArrow" style={{height: "38px", width: "38px"}} onClick = {this.toggleStore.bind(this)} /></div>
      <div>{store.address} </div>
      <div>{store.city_state_zip} </div>
      </div>
    : null
    return (
      storeSummary
    );
  }
}

export default StoreDetails;