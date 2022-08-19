import React, {useState} from "react";
import TaskList from "./TaskList";
import TaskUpdate from "./TaskUpdate";
import Toolbar from "./Toolbar";


const WorkSpace = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div className='work-space'>
            <Toolbar onSubmit={addTodo}/>
            <div className='taskbar'>
                <div className='cards-wrapper'>
                    <TaskList
                        todos={todos}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                </div>
                <TaskUpdate/>
            </div>
        </div>
    )
}
export default WorkSpace