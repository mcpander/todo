import React from 'react';
import { connect } from 'react-redux'

import {addTODO} from '../actions/todos.js';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ToDoAdd extends React.Component{

  state = {
    text:''
  }

  changeText = (event) => {
    this.setState({text:event.target.value});
  }

  addTODO = () => {
    let {addTODO} = this.props;
    let {text} = this.state;
    this.setState({text:''});
    addTODO({text})
  }

  render(){
    let {text} = this.state;
    return (
      <div>
        <TextField
          value = {text}
          onChange = {this.changeText}
          fullWidth = {true}
          name = 'todo'
        />
        <RaisedButton
          label = 'Отправить'
          fullWidth = {true}
          disabled = {text == ''}
          onTouchTap = {this.addTODO}
        />
      </div>
    );
  }
}

let funcsMap = (dispatch) => {
  return {
    addTODO: (todo) => {
      dispatch(addTODO(todo))
    }
  }
}

export default connect(
  false,
  funcsMap
)(ToDoAdd)
