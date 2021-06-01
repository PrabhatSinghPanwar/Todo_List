import React from 'react'
import { useState } from 'react';

export default function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Task or Description cannot be NULL...")
        }
        else{
            props.addTodo(title, desc) ;
            setTitle("");
            setDesc("");
        }
    }

    // style component
    const atsk={
        fontFamily: "Ubuntu",
        fontWeight: 'bold'
    }

    return (
        <div className="container mt-5">
            <h3 style={atsk}>ADD A TASK</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Work on Project"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Complete the remaining project" />
                </div>
                        <button type="submit" className="btn btn-lg btn-success mb-3"><i className="fas fa-plus-circle"></i>ADD</button>
            </form>
        </div>
    )
}
