import React from "react"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from "./hooks/useToggle"
import EditTodoForm from "./EditTodoForm"

function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {

    const [isEdditing, toggle] = useToggleState(false)


    return (
        <ListItem style={{ height: "64ox" }}>
            {isEdditing ? (
                <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle} />
            ) : (
                    <>
                        <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                        <ListItemText
                            style={{ textDecoration: completed ? "line-through" : "none" }}
                        >
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton onClick={toggle}>
                                <EditIcon aria-label="Edit" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
                )}
        </ListItem>
    )
}

export default Todo;