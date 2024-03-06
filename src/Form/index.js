import React, { useState } from "react";
import { Document, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        setNewTaskContent("");
        if (newTaskContent.trim() === "") {
            return;
        }


        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <Document onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </Document>
    )
};

export default Form;