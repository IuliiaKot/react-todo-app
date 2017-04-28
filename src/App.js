import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from './components/todo/TodoForm'

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an Awesome App', isComplete: false},
        {id: 3, name: 'Ship It!', isComplete: false},

      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(evt) {
    this.setState({currentTodo: evt.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm change={this.handleInputChange}
          currentTodo={this.state.currentTodo}/>
          <div className="Todo-List">
            <ul>
              {
                this.state.todos.map(item => {
                  return <li key={item.id}><input
                    type="checkbox"
                    defaultChecked={item.isComplete}
                    />{item.name}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
