import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo} from './lib/todoHelpers';
import {generateId, findById, toggleTodo, updateTodo} from './lib/todoHelpers';
import {pipe, partial} from './lib/utils'

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Build an Awesome App', isComplete: false},
      {id: 3, name: 'Ship It!', isComplete: false},

    ],
    currentTodo: ''
  };

  handleToggle = (id) => {
    const getUpdatesTodos = pipe(findById, toggleTodo,
    partial(updateTodo, this.state.todos))
    // const todo = findById(id, this.state.todos)
    // const toggled = toggleTodo(todo)
    const updatedTodos = getUpdatesTodos(id, this.state.todos)
    this.setState({todos: updatedTodos})
  }


  handleSubmit = (evnt) => {
    evnt.preventDefault();
    const newId = generateId();
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false
    };
    const updatedTodo = addTodo(this.state.todos, newTodo)
    this.setState({todos: updatedTodo,
      currentTodo: '',
      errorMessage: ''
    });
  };

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: "Please supply a todo name"
    })
  }


  handleInputChange = (evt) => {
    this.setState({currentTodo: evt.target.value});
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm change={this.handleInputChange}
          currentTodo={this.state.currentTodo}
          handleSubmit={submitHandler}/>
          <TodoList handleToggle={this.handleToggle} 
          todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
