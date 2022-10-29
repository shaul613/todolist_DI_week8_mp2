import React from 'react';

class TodoList extends React.Component{
  constructor(props){
    super();
  }

  deleteItem = (event) => {
    event.target.remove();
  }

  render(){

    const todos = this.props.todos.map((item, index) => {
      return(
        <div id="todoItem" onClick={this.deleteItem} key={index}>
          {item}
        </div>
      )
    })

    return(
      <div id="todoList">
        {todos}
      </div>
    )
  }

}

export default TodoList;
