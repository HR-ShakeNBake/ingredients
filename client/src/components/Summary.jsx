import React from 'react';
import ReactDOM from 'react-dom';

function Summary(props) {
  return (
  	<div className="summary">
  	<span className="helper"></span>
  	  <span className="timer">8 h 30 m </span> <img src="timer.png" style={{height: "25px", width: "25px", verticalAlign: "middle", marginRight: "10px", marginLeft: "3px"}} /> 
  	  <span className="servings">8 servings </span> <img src="chart.png" style={{height: "25px", width: "25px", verticalAlign: "middle", marginRight: "10px", marginLeft: "3px"}} /> 
  	  <span className="calories">262 cals </span> <img src="bar_graph.png" style={{height: "25px", width: "25px", verticalAlign: "middle", marginRight: "10px", marginLeft: "3px"}} /> 

  	</div>
  	);
}

export default Summary;