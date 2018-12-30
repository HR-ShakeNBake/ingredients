import React, { Component } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
   //this.props.getStoreInfo(); 
   //The above line is where you would update your code to invoke a function that sends a GET req to get store info on a different store
   //The below line is for FEC and is not the proper functionality for a full stack component
    this.props.scrollToNextStore();
  }

  render() {
    return (
      <div>
      <button className="findMeButton" onClick={this.handleSubmit}>Find Me</button>
      <div style={{textAlign: "center", color: "#b3b3b3", fontSize: ".8888888889rem", fontWeight: "bold", marginBottom: "23px"}}>or</div>
      <form onSubmit={this.handleSubmit} style={{marginBottom: "35px"}}>
        <input type="text" style={{fontSize: "18px", fontFamily: "Source Sans Pro", fontWeight: "bold", color: "#b2b2b2", height: "68px", width: "218px", marginLeft: "7px"}} placeholder="Enter Zip Code" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="OK" className="locationSubmitButton" />
      </form>
      </div>
    );
  }
}

export default Form;