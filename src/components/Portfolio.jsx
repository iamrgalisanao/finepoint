import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = ({ projects }) => {
    const [filter, setFilter] = useState('All');
    const [loadingProject, setLoadingProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handleProjectClick = (id) => {
        setLoadingProject(id);
        setTimeout(() => {
            setLoadingProject(null);
        }, 1500);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setCurrentPage(1); // Reset to first page on filter change
    };

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const categories = ['All', ...new Set(projects.map(p => p.category))];

    // Pagination Logic
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

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
                            onClick={() => handleFilterChange(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {paginatedProjects.map((project, index) => (
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

                {totalPages > 1 && (
                    <div className="pagination-container">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentPage(i + 1);
                                    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
