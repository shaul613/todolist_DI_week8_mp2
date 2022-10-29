import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import AddItem from './components/AddItem';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos:[
        'clean',
        'go to the store',
      ],
    }
  }

  addItem = (item) => {
    let todos = [...this.state.todos];
    todos.push(item);
    this.setState({todos:todos})
  }

  render(){
    return(
      <div>
        <div id="container">
          <h1>Todo List</h1>
          <TodoList todos={this.state.todos}/>
          <br/>
          <AddItem addItem={this.addItem}/>
        </div>
      </div>
    )
  }

}

export default App;
