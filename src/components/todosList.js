/* eslint-disable */
import TodoItem from './todoItem';

import { Component } from 'react';

class TodosList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodosList;
