import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import axios from "axios";
// import "./main.css";
function App() {
  const [todos, settodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/todos").then(async (res) => {
      const json = await res.json();
      console.log(json);
      settodos(json);
    });
  }, []);
  // fetch("http://localhost:4000/todos").then(async (res) => {
  //   const json = await res.json();
  //   console.log(json);
  //   settodos(json);
  // });

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <p className="bg-blue-500 font-serif">Pratham</p>
      <p>hello</p>
      <p></p> */}
    </>
  );
}

export default App;
