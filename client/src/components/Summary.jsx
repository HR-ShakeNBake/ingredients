import React from 'react';
import ReactDOM from 'react-dom';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metricSystem: true
    };
  }




  render() {
	  return (
	  	<div style={{fontWeight: 600}} className="summary">
	  	<span className="helper"></span>
	  	  <span style={{fontWeight: 600}} className="timer">8 h 30 m </span> <img src="timer.png" style={{height: "25px", width: "25px", verticalAlign: "middle", marginRight: "10px", marginLeft: "3px"}} /> 
	  	  {this.props.servingsFormState 
	  	    ? <span style={{cursor: "pointer"}} onClick={this.props.toggleServingsForm}><span className="servings" style={{color: "#FF7E1A"}}>{this.props.recipeSize} servings </span> <img src="orange_chart.png" style={{height: "25px", width: "25px", verticalAlign: "middle", marginRight: "10px", marginLeft: "3px"}} /> </span> 
	  	    : <span style={{cursor: "pointer"}} onClick={this.props.toggleServingsForm}><span className="servings">{this.props.recipeSize} servings </span> <img src="gray_chart.png" style={{height: "25px", width: "25px", verticalAlign: "middle", marginRight: "10px", marginLeft: "3px"}} /> </span>
	      }  
	  	  <span className="calories">262 cals </span> <img src="bar_graph.png" style={{height: "25px", width: "25px", verticalAlign: "middle", marginRight: "10px", marginLeft: "3px"}} /> 

	  	</div>
	  	);
	}
}

export default Summary;