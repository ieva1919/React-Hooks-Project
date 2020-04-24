import React, { Fragment } from "react"
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from "./Todo"

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {

    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <Fragment key={todo.id}>
                        <Todo
                            id={todo.id}
                            task={todo.task}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        <Divider />
                    </Fragment>
                ))}
            </List>
        </Paper>
    )
}

export default TodoList;