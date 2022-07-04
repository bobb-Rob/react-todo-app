/* eslint-disable */
import React from 'react';
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    state = {
        editing: false,
    }

    handleEditing = () => {
        console.log("edit mode activated")
        this.setState({
            editing: true,
          })
    }

  render() {
    const { handleChangeProps, deleteTodoProps, setUpdate } = this.props;
    const { id, completed, title } = this.props.todo;

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
    viewMode.display = "none"
    } else {
    editMode.display = "none"
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
            <input 
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChangeProps(id)}
            />       
            <button
            onClick={() => deleteTodoProps(id)}
            >
            Delete
            </button>
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={e => {
           setUpdate(e.target.value, id)
        }}
        />
      </li>
    );
  }
}

export default TodoItem;
