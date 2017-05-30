/**
 * Created by McPander on 30.05.2017.
 */
const initialState = {
  todos:{
    1:{id:1,text:'First initial',viewed:false,date:+new Date()},
    2:{id:2,text:'Second initial',viewed:false,date:+new Date()}
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos:{[action.todo.id]:action.todo,...state.todos}
      }
    case 'CHANGE_TODO':
      return {
        ...state,
        todos:{...state.todos,[action.todo.id]:action.todo}
      }
    default:
      return state
  }
}
