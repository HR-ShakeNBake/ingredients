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
    this.props.getStoreInfo()
  }

  render() {
    return (
      <div>
      <button className="findMeButton" onClick={this.handleSubmit}>Find Me</button>
      <div style={{textAlign: "center"}}>or</div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" style={{fontSize: "18px", fontFamily: "Source Sans Pro", height: "48px", width: "200px", margin: "0px 0px"}} placeholder="Enter Zip Code" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="OK" className="locationSubmitButton" />
      </form>
      </div>
    );
  }
}

export default Form;