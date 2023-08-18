import React, { useState } from 'react'
import './Todo.css'
const Todo = () => {
    const [Todo,setTodo]=useState({
        name:''
    })
    const [Newtodo,setNewtodo]=useState([])
    const hangeHandler = (e)=>{
        setTodo({...Todo,[e.target.name]:e.target.value})
        // setTodo(e.target.value)
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        const newdata = [...Newtodo,Todo]
        setNewtodo(newdata)
        setTodo({
            name:''
        })
    }

  return (
    <div>
    
        <form onSubmit={submitHandler}>
            <input type='text' name='name' value={Todo.name} onChange={hangeHandler}/>
            <input type='submit'  value='submit' />
        </form>
        <div>
            {
                Newtodo.map((e,i)=>(
                    <p>{e.name}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Todo