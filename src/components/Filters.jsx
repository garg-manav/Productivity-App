import './Filters.css';

export function Filters({ filter, onFilterChange, categoryFilter, onCategoryFilterChange }) {
    return (
        <div className="filter-container">
            <div className="status-filters">
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => onFilterChange('all')}
                >
                    All
                </button>
                <button
                    className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
                    onClick={() => onFilterChange('pending')}
                >
                    Pending
                </button>
                <button
                    className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                    onClick={() => onFilterChange('completed')}
                >
                    Completed
                </button>
            </div>

            <div className="category-filter-wrapper">
                <select
                    className="category-filter-select"
                    value={categoryFilter}
                    onChange={(e) => onCategoryFilterChange(e.target.value)}
                >
                    <option value="All Categories">All Categories</option>
                    <option value="Work">Work</option>
                    <option value="Study">Study</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </div>
    );
}
