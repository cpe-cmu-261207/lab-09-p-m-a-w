import { useEffect, useState } from "react";
import Todo from "./Todo";
import React from "react";
// import { ThemeContext } from "../pages/theme";

export default function Todolist() {
    const [started, setStarted] = useState(false);
    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState({ completed: 0, pending: 0 });
    const [todoElements, setTodoElements] = useState([]);
    const deleteTodo = (idx) => {
        setTodos(todos.filter((_, i) => {
            return i !== idx;
        }));
    };

    const markTodo = (idx) => {
        setTodos(todos.map((element, i) => {
            if (i === idx)
                return { title: element.title, completed: !element.completed };
            return element;
        }));
    };

    const moveUp = (idx) => {
        if (idx === 0 || todos.length <= 1) return;
        const newTodos = todos.map(x => x);
        const temp = newTodos[idx];
        newTodos[idx] = newTodos[idx - 1];
        newTodos[idx - 1] = temp;
        setTodos(newTodos)
    };

    const moveDown = (idx) => {
        if (idx === todos.length - 1 || todos.length <= 1) return;
        const newTodos = todos.map(x => x);
        const temp = newTodos[idx];
        newTodos[idx] = newTodos[idx + 1];
        newTodos[idx + 1] = temp;
        setTodos(newTodos)
    };

    const addTodo = (val) => setTodos([{ title: val, completed: false }, ...todos])


    const onInput = (e) => {
        if (e.key !== 'Enter') return;
        if (e.target.value == '') {
            alert('Todo cannot be empty');
            return;
        }
        addTodo(e.target.value);
        e.target.value = '';
    }

    const localKey = 'todos';
    const localSaveTodo = () => {
        if (typeof window === 'undefined') return;
        window.localStorage.setItem(localKey, JSON.stringify(todos));
    }
    const localLoadTodo = () => {
        if (typeof window === 'undefined') return;
        const data = JSON.parse(window.localStorage.getItem(localKey));
        if (data !== null) setTodos(data);
    }

    useEffect(() => {
        if (!started) return;
        localSaveTodo();
        const elements = [];
        const newCounter = { completed: 0, pending: 0 };
        setTodoElements([]);
        for (let i = 0; i < todos.length; i++) {
            elements.push(<Todo
                key={i} title={todos[i].title} completed={todos[i].completed}
                on={{
                    complete: () => markTodo(i),
                    up: () => moveUp(i),
                    down: () => moveDown(i),
                    delete: () => deleteTodo(i)
                }
                }></Todo >);
            newCounter.completed += todos[i].completed ? 1 : 0;
            newCounter.pending += todos[i].completed ? 0 : 1;
        }
        setTodoElements(elements)
        setCounter(newCounter)
    }, [todos, started]);
    useEffect(() => {
        setStarted(true);
        localLoadTodo()
    }, []);

    // const { theme, turnDark, turnLight } = useContext(ThemeContext);
    return <div>
        {/* Entire App container (required for centering) */}
        <div style={{ maxWidth: "700px" }} className="mx-auto">
            {/* App header */}
            <p className="display-4 text-center fst-italic m-4">
                Minimal Todo List <span className="fst-normal">☑️</span>
            </p>
            {/* Input */}
            <div className="d-flex align-items-center gap-2">
                <input
                    className="form-control mb-1 fs-4"
                    placeholder="insert todo here..."
                    onKeyDown={onInput}
                />
            </div>
            {/* Todos */}
            <div>{todoElements}</div>

            {/* summary section */}
            <p className="text-center fs-4">
                <span className="text-primary">All ({counter.completed + counter.pending}) </span>
                <span className="text-warning">Pending ({counter.pending}) </span>
                <span className="text-success">Completed ({counter.completed})</span>
            </p>

            {/* Made by section */}
            <p className="text-center mt-3 text-muted fst-italic">
                made by Perapol Pamoonchaer 640610655
            </p>
        </div>
    </div >
}