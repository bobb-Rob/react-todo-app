/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styles from "./TodoItem.module.css";
import { FaTrash } from "react-icons/fa"

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }
 
    const { handleChangeProps, deleteTodoProps, setUpdate } = props;
    const { id, completed, title } = props.todo;

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    let viewMode = {}
    let editMode = {}

    if (editing) {
    viewMode.display = "none"
    } else {
    editMode.display = "none"
    }

    useEffect(() => {
      return () => {
        console.log("Cleaning up...")
      }
    }, [])

    return (
      <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={viewMode}>
            <input 
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChangeProps(id)}
            />       
            <button
            onClick={() => deleteTodoProps(id)}
            >
            <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
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
          onKeyDown={handleUpdatedDone}
        />
      </li>
    );
  }


export default TodoItem;
