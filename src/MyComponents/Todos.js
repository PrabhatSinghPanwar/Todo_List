import React from 'react'
import TodoItem from"./TodoItem";

export default function Todos( props ) {                    //ans object props is pass you can retrive values by using props.item_name
    return (
        <div className="container">
            
            <h3 className=" my-3">Todos List</h3>
            {/*{props.todos}*/}

            { props.todos.length===0 ? "There is nothing to do in the list..." :
            props.todos.map((todo)=>{
                return ( 
                < TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                );       //must send a unique key
            })
            } 
            

        </div>
    )
}
