import React from 'react';
import { connect } from 'react-redux'

import {changeTODO} from '../actions/todos.js';

import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

class ToDoList extends React.Component{
  render(){
    let {todos,changeTODO} = this.props;
    return (
      <List>
        {Object.keys(todos).reverse().map(todo=>(
          <ListItem
            key={todos[todo].id}
            primaryText={`${new Date(todos[todo].date).toLocaleDateString('ru-RU',{year:'numeric',month:'long',day:'numeric'})} ${new Date(todos[todo].date).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})} ${todos[todo].text}`}
            leftIcon={!todos[todo].viewed ? <ActionInfo /> : null}
            onTouchTap = {()=>{changeTODO({...todos[todo],viewed:true})}}
          />
        ))}
      </List>
    );
  }
}

let propsMap = (state) => {
  return {
    todos: state.todos
  }
}

let funcsMap = (dispatch) => {
  return {
    changeTODO: (todo) => {
      dispatch(changeTODO(todo))
    }
  }
}

export default connect(
  propsMap,
  funcsMap
)(ToDoList)
