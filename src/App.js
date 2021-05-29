import './App.css';
import Header from"./MyComponents/Header";
import Footer from"./MyComponents/Footer";
import Todos from"./MyComponents/Todos";
import AddTodo from"./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import About from "./MyComponents/About"; 

function App() {

  let initTodo;

  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {

    //deleting this way does not works
    //let index = todos.indexOf(todo);
    //todos.splice(indes, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos)); 
  }

  const addTodo = (title, desc) => {


    let len = todos.length;
    let sno;

    if(len!==0) {
      sno = todos[todos.length-1].sno+1
    }
    else {
      sno = 0 ;
    } 
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    } 
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }, [todos])                                                       //whenever todos gets changed use this method
  

  return (
    <div className="app">
      <Router>

        <Header title="MyToDoList" SearchBar={true} />

        <Switch>
          <Route exact path="/" render = {() => {
            return(
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
