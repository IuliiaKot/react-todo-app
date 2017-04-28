import React from 'react'

export const TodoForm = (props) => (
  <form>
    <input type="text" value={props.currentTodo}
      onChange={props.change}/>
  </form>
)


TodoForm.propsTypes ={
  currentTodo: React.PropTypes.string.isRequired,
  change : React.PropTypes.func.isRequired
}
