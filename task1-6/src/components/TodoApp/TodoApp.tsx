import React, { useState } from 'react';
import './Todo.css';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
};

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo.trim() === '') return;

        const newTodoItem: Todo = {
            id: Date.now(),
            text: newTodo,
            completed: false,
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className='todo-app'>
            <h2>ToDoリスト</h2>
            <input type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>追加</button>
            <div>
                <ul className='todo-list'>
                    {todos.map(todo => (
                        <li className='todo-list-item' key={todo.id} style={{ color: todo.completed ? '#a1a1a1' : '#000' }}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)} />
                            {todo.text}
                            <button className='list-delete-btn' onClick={() => deleteTodo(todo.id)}>削除</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoApp
