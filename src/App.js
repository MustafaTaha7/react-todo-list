import React, { Component } from "react";
import AddItem from "./components/AddItem/AddItem";
import TodoItems from "./components/TodoItems/TodoItems";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Hamza", age: 21 },
      { id: 2, name: "Mustafa", age: 26 },
      { id: 3, name: "Ahmed", age: 25 },
    ],
  };
  deleteItem = (id) => {
    // const items = this.state.items;
    // let i = items.findIndex(item => item.id === id);
    // console.log(i, items);
    // items.splice(i,1);
    // this.setState({items})

    let items = this.state.items.filter(item => {
      return item.id !== id
    })
     this.setState({items})
  }

  addItem = (item) =>{
    item.id = Math.random()*10;
    let items = this.state.items;
    items.push(item);
    this.setState({
      items
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">todo list</h1>
        <TodoItems items={this.state.items} deleteItem = {this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
