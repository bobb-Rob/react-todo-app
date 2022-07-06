/* eslint-disable */
import TodoItem from './todoItem';

import { Component } from 'react';

const TodosList = (props) => {
 
    const { todos, handleChangeProps, deleteTodoProps, setUpdate } = props;

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


export default TodosList;
