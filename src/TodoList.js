import React from 'react'
import Todo from './Todo'

function TodoList({todoArr}) {
    return(
        todoArr.map(todo => {
            return <Todo key = {todo} todo = {todo} />
        })
    )
}

export default TodoList