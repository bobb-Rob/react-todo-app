/* eslint-disable */
import React, { useState, useEffect} from 'react';
import TodosList from './todosList';
import Header from './header';
import InputTodo from './inputTodo';
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [todos, setTodos] = useState([])
    
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

     const addTodoItem = title => {
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

      
      useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
        console.log('updated')
      }, [todos])     

      useEffect(() => {
        console.log("test run")
      
        // getting stored items
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
      
        if (loadedTodos) {
          setTodos(loadedTodos)
        }
      }, [setTodos])

   
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