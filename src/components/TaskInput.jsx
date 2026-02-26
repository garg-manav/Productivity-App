import { useState } from 'react';
import './TaskInput.css';

export function TaskInput({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Personal');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onAddTask(title.trim(), category);
        setTitle('');
        setCategory('Personal');
    };

    return (
        <form className="task-input-form" onSubmit={handleSubmit}>
            <div className="input-glass">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What needs to be done?"
                    className="task-input"
                />

                <div className="category-select-wrapper">
                    <select
                        className="category-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Work">Work</option>
                        <option value="Study">Study</option>
                        <option value="Personal">Personal</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="add-btn"
                    disabled={!title.trim()}
                >
                    <svg className="plus-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>
        </form>
    );
}
