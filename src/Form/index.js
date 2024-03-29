import React, { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const focusRef = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();
        setNewTaskContent("");
        if (newTaskContent.trim() === "") {
            return;
        }


        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        focusRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={focusRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;