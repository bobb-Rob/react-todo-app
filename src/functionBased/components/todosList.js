/* eslint-disable */
import TodoItem from './todoItem';

import { Component } from 'react';

class TodosList extends Component {
  render() {
    const { todos, handleChangeProps, deleteTodoProps, setUpdate } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps = {handleChangeProps}
            deleteTodoProps={ deleteTodoProps }
            setUpdate={ setUpdate }
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
