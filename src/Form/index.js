import React, { useState, useRef } from "react";
import { Document, Input, Button } from "./styled";

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
        <Document onSubmit={onFormSubmit}>
            <Input
                ref={focusRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </Document>
    )
};

export default Form;