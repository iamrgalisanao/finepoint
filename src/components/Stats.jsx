import React from 'react';
import './Stats.css';

const Stats = () => {
    const stats = [
        { label: 'Cumulative Project Value', value: '$2.4B+', icon: '🏗️' },
        { label: 'Technical Specialists', value: '150+', icon: '👷' },
        { label: 'BIM-Optimized Workflows', value: '100%', icon: '🖥️' },
        { label: 'Years of Engineering Mastery', value: '30+', icon: '📐' }
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card glass-card reveal">
                            <span className="stat-icon">{stat.icon}</span>
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
