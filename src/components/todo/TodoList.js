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
            isComplete={item.isComplete}/>
          })
        }
      </ul>
    </div>
  )
}
