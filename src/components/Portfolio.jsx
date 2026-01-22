import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = ({ projects }) => {
    const [filter, setFilter] = useState('All');
    const [loadingProject, setLoadingProject] = useState(null);

    const handleProjectClick = (id) => {
        setLoadingProject(id);
        // Simulate a temporary placeholder/loading state
        setTimeout(() => {
            setLoadingProject(null);
        }, 1500);
    };

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const categories = ['All', 'Government', 'Residential', 'Commercial'];

    return (
        <section id="portfolio" className="section portfolio">
            <div className="container">
                <div className="section-title">
                    <h2>Our Portfolio</h2>
                    <div className="underline"></div>
                </div>

                <div className="filter-container">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id || index}
                            className="portfolio-item animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => handleProjectClick(project.id || index)}
                        >
                            <div className="portfolio-img-wrapper">
                                {loadingProject === (project.id || index) ? (
                                    <div className="image-placeholder">
                                        <div className="shimmer"></div>
                                        <div className="placeholder-text">Loading Project Details...</div>
                                    </div>
                                ) : (
                                    <>
                                        <img src={project.image} alt={project.title} />
                                        <div className="portfolio-overlay">
                                            <div className="overlay-content">
                                                <span className="project-category">{project.category}</span>
                                                <h3>{project.title}</h3>
                                                <p>{project.location}</p>
                                                <Link
                                                    to={`/portfolio/${project.slug}`}
                                                    className="btn-link"
                                                    onClick={(e) => {
                                                        // Prevent double trigger if clicking the link specifically
                                                        // but the link navigation will happen after the timeout if we wanted it to,
                                                        // for now let's just show placeholder on click anywhere.
                                                        e.stopPropagation();
                                                    }}
                                                >
                                                    View Details →
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
