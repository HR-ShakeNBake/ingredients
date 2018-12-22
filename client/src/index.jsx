import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        <div className="nav">
        NAV BAR
        </div>
        <div className="main">
        INGREDIENTS
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
