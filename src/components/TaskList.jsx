import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { TaskItem } from './TaskItem';
import './TaskList.css';

export function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">✓</div>
                <p>All caught up!</p>
                <span>Add a task to get started</span>
            </div>
        );
    }

    // Sort tasks: uncompleted first, then completed. 
    // Keep original order within those groups.
    const sortedTasks = [...tasks].sort((a, b) => {
        if (a.completed === b.completed) return 0;
        return a.completed ? 1 : -1;
    });

    const taskIds = sortedTasks.map(t => t.id);

    return (
        <ul className="task-list">
            <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
                {sortedTasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </SortableContext>
        </ul>
    );
}
