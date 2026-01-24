import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = ({ projects }) => {
    const [filter, setFilter] = useState('All');
    const [loadingProject, setLoadingProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [direction, setDirection] = useState(''); // 'slide-left' or 'slide-right'
    const itemsPerPage = 6;

    const handleProjectClick = (id) => {
        setLoadingProject(id);
        setTimeout(() => {
            setLoadingProject(null);
        }, 1500);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setDirection(''); // No slide on category change
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        if (newPage === currentPage) return;
        setDirection(newPage > currentPage ? 'slide-right' : 'slide-left');
        setCurrentPage(newPage);

        // Smooth scroll to portfolio section top
        const element = document.getElementById('portfolio');
        if (element) {
            const offset = 100; // Account for navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        // Reset direction after animation completes (roughly 600ms)
        setTimeout(() => setDirection(''), 600);
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
                    <h2>Projects</h2>
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

                <div className="portfolio-content-window">
                    <div className={`portfolio-grid ${direction}`} key={`${filter}-${currentPage}`}>
                        {paginatedProjects.map((project, index) => (
                            <div
                                key={project.id || index}
                                className="portfolio-item animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.05}s` }}
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
                </div>

                {totalPages > 1 && (
                    <div className="pagination-container">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(i + 1)}
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
