/* eslint-disable */
import React, { useState, useEffect} from 'react';
import TodosList from './todosList';
import Header from './header';
import InputTodo from './inputTodo';
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())
    
      const handleChange = (id) => {
        setTodos((prevState) => 
          prevState.map(todo => {
            if(todo.id === id){
              return {
                ...todo,
                completed : !todo.completed,
              }
            }
            return todo;
          })
        )
      }

      const deleteTodo = (id) => {
        setTodos([
          ...todos.filter((todo) => {
            return todo.id !== id;
          })
        ])
       };

     const addTodoItem = (title) => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
        };
        setTodos([...todos, newTodo])
      };

      const setUpdate = (updatedTitle, id) => {
        setTodos(
          todos.map(todo => {
            if (todo.id === id) {
              todo.title = updatedTitle
            }
            return todo
          })
        )
      }       

      function getInitialTodos() {
        // getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
      }

      useEffect(() => {
        console.log("todos updated")
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
      }, [todos])
   
      console.log(todos)

    return (      
      <div className="container">
        <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList
              todos={todos}
              handleChangeProps={handleChange}
              deleteTodoProps={deleteTodo}
              setUpdate={setUpdate}
            />
        </div>
      </div>   
    )
  }


export default TodoContainer;