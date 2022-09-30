import React, { useState, useEffect, useRef } from "react";

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : '');
  
  const inputRef = useRef(null)
  
  useEffect(() => {
    
    inputRef.current.focus()
    
  }, [])
  
  function handleSubmit(e) {
    e.preventDefault()    
    onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
      isComplete: false
    })   
    setInput('')  
  }

  function handleChange(e) {
    setInput(e.target.value)
  }
  
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      
      {!edit ? (
        <>
          <input
            type="text"
            name="text"
            className="todo-input"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add Todo</button>
        </>
      ) : 
        (
           <>
          <input
            type="text"
            name="text"
            className="todo-input"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button update">Update</button>
        </>
        )
      }
      
      
    </form>
  );
}

export default TodoForm;
