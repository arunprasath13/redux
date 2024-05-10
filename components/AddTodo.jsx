import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../src/features/todo/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
  }
  return (
     <form onSubmit={addTodoHandler}>
        <input  type="text" placeholder="enter Todo"/>
        <button type="button">Click</button>
     </form>
  );
};

export default AddTodo;
