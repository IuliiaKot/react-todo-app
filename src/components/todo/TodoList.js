import React from 'react';
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
  return(
    <div className="Todo-List">
      <ul>
        {
          props.todos.map(item => {
            return <TodoItem key={item.id}
            name={item.name}
            id={item.id}
            isComplete={item.isComplete}
            handleToggle={props.handleToggle}
            handleRemove={props.handleRemove}/>
          })
        }
      </ul>
    </div>
  )
};

TodoList.propsTypes = {
  todos: React.PropTypes.array.isRequired
}
