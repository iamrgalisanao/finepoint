import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = ({ projects }) => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
                <h2>Project Not Found</h2>
                <Link to="/#portfolio" className="btn btn-primary">Return to Portfolio</Link>
            </div>
        );
    }

    return (
        <div className="case-study-wrapper">
            {/* Project Hero Header */}
            <div className="cs-hero" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="cs-info-card">
                    <h1>{project.title}</h1>
                    <div className="cs-meta-list">
                        <div className="cs-meta-item">
                            <span className="label">Client:</span>
                            <span className="value">{project.client}</span>
                        </div>
                        <div className="cs-meta-item">
                            <span className="label">Project:</span>
                            <span className="value">{project.title}</span>
                        </div>
                        <div className="cs-meta-item">
                            <span className="label">Year:</span>
                            <span className="value">{project.year}</span>
                        </div>
                        <div className="cs-meta-item">
                            <span className="label">Duration:</span>
                            <span className="value">{project.duration}</span>
                        </div>
                        <div className="cs-meta-item">
                            <span className="label">Address:</span>
                            <span className="value">{project.address}</span>
                        </div>
                    </div>

                    <div className="cs-category-ribbon">
                        <span>{project.category}</span>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="cs-container container">
                {/* Thumbnail Gallery Overlay */}
                <div className="cs-gallery-strip">
                    {project.images?.map((img, idx) => (
                        <div
                            key={idx}
                            className="cs-thumb"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img src={img} alt={`${project.title} view ${idx + 1}`} />
                        </div>
                    ))}
                </div>

                {/* Narrative Sections */}
                <div className="cs-narrative">
                    <p className="cs-intro-text">
                        {project.description}
                    </p>

                    <div className="cs-content-body">
                        <h2>PROJECT OVERVIEW</h2>
                        <p>{project.overview}</p>

                        <div className="cs-sub-section">
                            <h3>KEY MODERNISATION WORKS INCLUDED:</h3>
                            <ul className="cs-bullet-list">
                                {project.highlights?.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <p className="cs-section-conclusion">{project.highlightsConclusion}</p>
                        </div>

                        <h2>SCOPE OF WORK</h2>
                        <ul className="cs-bullet-list">
                            {project.scope?.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <p className="cs-section-conclusion">{project.scopeConclusion}</p>

                        <h2>PROJECT DELIVERY</h2>
                        <p>{project.delivery}</p>
                    </div>
                </div>


                <div className="cs-back-nav">
                    <Link to="/#portfolio" className="btn btn-outline">← Back to Portfolio</Link>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="cs-modal" onClick={() => setSelectedImage(null)}>
                    <span className="cs-modal-close" onClick={() => setSelectedImage(null)}>&times;</span>
                    <div className="cs-modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Full screen preview" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
