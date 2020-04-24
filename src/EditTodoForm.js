import React from "react"
import TextField from '@material-ui/core/TextField';
import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, editTodo, task }) {

    const [value, hanldeChange, reset] = useInputState()

    return (
        <form onSubmit={e => {
            e.preventDefault()
            editTodo(id, value)
            reset()
        }}>
            <TextField
                margin="normal"
                value={value}
                onChange={hanldeChange}
                fullWidth
            />
        </form>
    )
}

export default EditTodoForm;