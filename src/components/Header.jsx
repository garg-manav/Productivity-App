import './Header.css';

export function Header({ stats, darkMode, onToggleDarkMode }) {
    const { total, completed } = stats;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

    return (
        <header className="header">
            <div className="header-top">
                <div className="title-section">
                    <h1>Productivity</h1>
                    <span className="subtitle">Master your day</span>
                </div>
                <div className="header-actions">
                    <button
                        className="theme-toggle"
                        onClick={onToggleDarkMode}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                    </button>
                    <div className="stats-bubble">
                        <span className="stats-number">{completed}/{total}</span>
                        <span className="stats-label">Tasks</span>
                    </div>
                </div>
            </div>
            {total > 0 && (
                <div className="progress-section">
                    <div className="progress-header">
                        <span className="progress-title">Completion</span>
                        <span className="progress-percentage">{progress}%</span>
                    </div>
                    <div className="progress-container">
                        <div
                            className="progress-bar"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            )}
        </header>
    );
}
