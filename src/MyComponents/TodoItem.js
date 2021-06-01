import React from 'react'

export default function TodoItem( {todo, onDelete} ) {                //use curly braces {} to pass the objedt as it is
    return (
        <>
        <div className="todosItem my-4"> 
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>

                                        {/*used arrow fuction for function passing*/}
            <button className="btn btn-sm btn-danger" onClick={ ()=>{onDelete(todo)} }><i class="fas fa-trash"></i>Delete</button>  
        </div>
        <hr/>
        </>
    )
}
