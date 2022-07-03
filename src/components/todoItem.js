/* eslint-disable */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    const {todo } = this.props;
    return (
      <li>{todo.title}</li>
    );
  }
}

export default TodoItem;
