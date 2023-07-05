import React from 'react'
import { ACTIONS } from './Todo'

function Todos({todo, dispatch}) {
  return (
    <>
    <div>
        <span style={{color: todo.complete? '#AAA':'lightgreen'}}>
            {todo.name}</span>
            <div className='btn'>
        <button onClick={()=> dispatch({type:ACTIONS.TOGGLE_TODO,payload: {id: todo.id}})}>Toggle</button>
        <button onClick={()=> dispatch({type:ACTIONS.DELETE_TODO,payload: {id: todo.id}})}>Delete</button>
        </div>
    </div>
    </>
  )
}

export default Todos