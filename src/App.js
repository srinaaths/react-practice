import React, { useEffect, useState } from "react";
import { Routes, Route, Link} from "react-router";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Routing from "./Routing";
import TodoList from "./TodoList";

function App() {

  console.log(<TodoList />);
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['t1', 't2']);
  const [text, setText] = useState(['t1', 't2']);
  const incFunction = () => setCount(count + 1);
  const resetFunction = () => setCount(0);
  useEffect(() => {
    console.log('rendered');
  }, [])
  const textChange = (e) => setText(e.target.value);
  return (
    <>
      {/* <Routes>
        <Route path = '/Demo1' element = {<Demo1 />}></Route>
        <Route path = '/Demo2' element = {<Demo2 />}></Route>
      </Routes> */}
      <TodoList todoArr = {todos}/>
      <Routing />
      <input type="text" onChange={textChange}/>
      <div>{text}</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>click me to add</button>
      <button onClick={resetFunction}>click to reset</button>
      <div>{count}</div>
      {/* <div>{todos}</div> */}
    </>
  );
}

export default App;