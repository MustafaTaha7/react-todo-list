import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  state = {
    name: '',
    age: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value, 
     
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value==="" && e.target.age.value==="") {
    
      return false;
    } else {
      this.props.addItem(this.state);
      this.setState({
        name: '',
        age: '',
      });
    }
  };
  render() {
    return (
      <div className="App ">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter name..."
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            
          />
          <input
            type="number"
            placeholder="Enter age..."
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
            
          />
          {/* <input type="sbmit" value="Add" /> */}
          <button type="submit" disabled={!this.state.name || !this.state.age ? true : false}>
            ADD
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
