import './App.css'
import './styles/css/reset.css'
import React from 'react';
import WorkSpace from "./components/WorkSpace";

function App() {

  return (
    <div className="app">
        <h1 className="title">
            To Do List
        </h1>
        <WorkSpace/>
    </div>
  );
}

export default App;
