import React from 'react';
import ToDoList from './ToDoList';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ToDoAdd from './ToDoAdd.jsx';

export default class ToDo extends React.Component{
  render(){
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({})}>
        <div className='todos-container'>
          <ToDoAdd/>
          <ToDoList/>
        </div>
      </MuiThemeProvider>
    );
  }
}
