/* eslint-disable */

import React from 'react';
import TodosList from './todosList';
import Header from './header';

class TodoContainer extends React.Component {
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       };

       handleChange = (id) => {
        this.setState((prevState) => ({
          todos: prevState.todos.map(todo => {
            if(todo.id === id){
              return {
                ...todo,
                completed : !todo.completed,
              }
            }
            return todo;
          })
        }))
       }

       deleteTodo = (id) => {
        this.setState((prevState) => ({
          ...prevState,
          todos: [...prevState.todos.filter((todo) => {
            return todo.id !== id;
          })
        ],
        }))
       }

    render() {
        return (
            <div>
              <Header />
              <TodosList
                todos={this.state.todos}
                handleChangeProps={this.handleChange}
                deleteTodoProps={this.deleteTodo}
              />
            </div>
        )
    }
}

export default TodoContainer;