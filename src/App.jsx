import { useState, useEffect, useCallback, useMemo } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { Filters } from './components/Filters';
import './index.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('All Categories');
    const [darkMode, setDarkMode] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    // Load tasks from LocalStorage on first render using useEffect
    useEffect(() => {
        const savedTasks = localStorage.getItem('productivity-tasks');
        if (savedTasks) {
            try {
                setTasks(JSON.parse(savedTasks));
            } catch (e) {
                console.error("Failed to parse tasks", e);
            }
        }

        const savedTheme = localStorage.getItem('productivity-theme');
        if (savedTheme) {
            try {
                setDarkMode(JSON.parse(savedTheme));
            } catch (e) {
                console.error("Failed to parse theme", e);
            }
        }

        setIsInitialLoad(false);
    }, []);

    // Update LocalStorage automatically when tasks change
    useEffect(() => {
        if (!isInitialLoad) {
            localStorage.setItem('productivity-tasks', JSON.stringify(tasks));
        }
    }, [tasks, isInitialLoad]);

    // Apply dark mode class to body element and save preference
    useEffect(() => {
        if (!isInitialLoad) {
            localStorage.setItem('productivity-theme', JSON.stringify(darkMode));
        }
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode, isInitialLoad]);

    const handleAddTask = useCallback((text, category) => {
        const newTask = {
            id: crypto.randomUUID(), // Unique ID
            text,
            category,
            completed: false,
            createdAt: new Date().toISOString()
        };
        setTasks(prevTasks => [newTask, ...prevTasks]);
    }, []);

    const handleToggleTask = useCallback((id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }, []);

    const handleDeleteTask = useCallback((id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }, []);

    const handleDragEnd = useCallback((event) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setTasks((items) => {
                const oldIndex = items.findIndex(t => t.id === active.id);
                const newIndex = items.findIndex(t => t.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }, []);

    const toggleDarkMode = useCallback(() => {
        setDarkMode(prevMode => !prevMode);
    }, []);

    // Filter tasks based on current state
    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            if (filter === 'completed' && !task.completed) return false;
            if (filter === 'pending' && task.completed) return false;

            if (categoryFilter !== 'All Categories' && task.category !== categoryFilter) return false;

            return true;
        });
    }, [tasks, filter, categoryFilter]);

    const stats = useMemo(() => {
        return {
            total: tasks.length,
            completed: tasks.filter(t => t.completed).length
        };
    }, [tasks]);

    return (
        <div className="app-container">
            <Header
                stats={stats}
                darkMode={darkMode}
                onToggleDarkMode={toggleDarkMode}
            />
            <main>
                <TaskInput onAddTask={handleAddTask} />

                <Filters
                    filter={filter}
                    onFilterChange={setFilter}
                    categoryFilter={categoryFilter}
                    onCategoryFilterChange={setCategoryFilter}
                />

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <TaskList
                        tasks={filteredTasks}
                        onToggle={handleToggleTask}
                        onDelete={handleDeleteTask}
                    />
                </DndContext>
            </main>
        </div>
    );
}

export default App;
