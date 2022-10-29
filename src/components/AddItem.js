import React from 'react';

class AddItem extends React.Component{
  constructor(){
    super();
    this.state = {
      item:'',
      text:'',
    }
  }

  handleChange = (event) => {
    this.setState({text:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.text);
    this.setState({text:''});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label><small>Add Item</small></label>
          <br></br>
          <input id="addItem" type="text" onChange={this.handleChange} value={this.state.text}/>
        </form>
      </div>
    )
  }
}

export default AddItem;
