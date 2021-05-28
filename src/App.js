import './App.css';
import Header from"./MyComponents/Header";
import Footer from"./MyComponents/Footer";
import Todos from"./MyComponents/Todos";
import AddTodo from"./MyComponents/AddTodo";
import React, { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    console.log("I AM ON DELETE... of todo", todo)
    //deleting this way does not works
    //let index = todos.indexOf(todo);
    //todos.splice(indes, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

  }

  const addTodo = (title, desc) => {
    console.log("adding the todo", title, desc);

    let len = todos.length;

    if(len!==0) {
    let sno = todos[todos.length-1].sno+1
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    } 
    setTodos([...todos, myTodo]);
    console.log(myTodo) ;
    }
    else {
      let sno = 0 ;
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      } 
      setTodos([...todos, myTodo]);
      console.log(myTodo) ;
    } 
  }

  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <Header title="My ToDo List" SearchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </div>
  );
}

export default App;
