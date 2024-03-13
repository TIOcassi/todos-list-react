import { useState } from "react";

const [hideDone, setHideDone] = useState(false);

const tasksLocalStorage = localStorage.getItem("tasks");

const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks"))
    || tasksLocalStorage);

export const useTasks = () => {

    const storage = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    storage()
    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    }

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }));
    }

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };
    return {
        tasks,
        hideDone,
        addNewTask,
        setAllDone,
        toggleTaskDone,
        removeTask,
        toggleHideDone,
    }
};