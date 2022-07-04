/* eslint-disable */
import TodoItem from './todoItem';

import { Component } from 'react';

class TodosList extends Component {
  render() {
    const { todos, handleChangeProps } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps = {handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
