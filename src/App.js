import React, { Component } from 'react';
import AddItem from './components/AddItem/AddItem';
import TodoItems from './components/TodoItems/TodoItems';

class App extends Component {
  state = {
    items: [
      {id: 1, name:'Hamza', age:21},
      {id: 2, name:'Mustafa', age:26},
      {id: 3, name:'Ahmed', age:25},
  ]
  }
  render() {
    return (
      <div className="App">
        todo list
        <TodoItems items = {this.state.items} />
        <AddItem />
      </div>
    );
  }
  
}

export default App;
