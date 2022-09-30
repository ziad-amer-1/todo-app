import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
  
  const [todos, setTodos] = useState([])
  
  function addTodo(todo) {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }  
  
  function completeTodo(id) {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })  
    setTodos(updatedTodos)
  }  
  
  function removeTodo(id) {
    const removeArr = todos.filter(todo => todo.id !== id)
    setTodos(removeArr)
  }
  
  function editTodo(todoId, newValue) {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    
    setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
  }
  
  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <div className="todos-container">
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={ editTodo } />
      </div>
    </div>
  )
}

export default TodoList