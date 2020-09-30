import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }

  render() {
    return (
      <div className="car">
        <h1>My {this.state.brand}</h1>
        <p>
          It is a <b style={{color: this.state.color}}>{this.state.color}</b> {this.state.model} from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}


export default Car;