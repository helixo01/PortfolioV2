import React, { useState, useCallback } from 'react';
import { IoArrowForward, IoArrowBack, IoLogoGithub, IoGlobeOutline } from 'react-icons/io5';
import './Projects.css';

const Projects = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsPerSlide = 2;

  const projects = [
    {
      title: language === 'fr' ? "Projet 01" : "Project 01",
      description: language === 'fr' 
        ? "Design & Développement Web" 
        : "Web Design & Development",
      longDescription: language === 'fr'
        ? "Une application web moderne utilisant les dernières technologies pour offrir une expérience utilisateur optimale."
        : "A modern web application using the latest technologies to provide an optimal user experience.",
      image: "./images/test.png",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      status: "completed",
      links: {
        github: "https://github.com/username/project1",
        live: "https://project1.com"
      }
    },
    {
      title: language === 'fr' ? "Projet 02" : "Project 02",
      description: language === 'fr' 
        ? "Application Mobile" 
        : "Mobile Application",
      longDescription: language === 'fr'
        ? "Application mobile cross-platform développée avec React Native."
        : "Cross-platform mobile application developed with React Native.",
      image: "./images/test.png",
      tags: ["React Native", "Firebase", "Stripe", "Redux"],
      status: "in-progress",
      links: {
        github: "https://github.com/username/project2",
        live: "https://project2.com"
      }
    },
    {
      title: language === 'fr' ? "Projet 03" : "Project 03",
      description: language === 'fr' 
        ? "Application Desktop" 
        : "Desktop Application",
      longDescription: language === 'fr'
        ? "Application desktop développée avec Electron."
        : "Desktop application developed with Electron.",
      image: "./images/test.png",
      tags: ["Electron", "React", "SQLite", "TypeScript"],
      status: "completed",
      links: {
        github: "https://github.com/username/project3",
        live: "https://project3.com"
      }
    },
    {
      title: language === 'fr' ? "Projet 04" : "Project 04",
      description: language === 'fr' 
        ? "Site E-commerce" 
        : "E-commerce Website",
      longDescription: language === 'fr'
        ? "Site e-commerce complet avec système de paiement."
        : "Complete e-commerce website with payment system.",
      image: "./images/test.png",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Docker"],
      status: "in-progress",
      links: {
        github: "https://github.com/username/project4",
        live: "https://project4.com"
      }
    },
    {
      title: language === 'fr' ? "Projet 05" : "Project 05",
      description: language === 'fr' 
        ? "Application IoT" 
        : "IoT Application",
      longDescription: language === 'fr'
        ? "Plateforme IoT pour la gestion et le monitoring d'appareils connectés."
        : "IoT platform for connected device management and monitoring.",
      image: "./images/test.png",
      tags: ["Python", "MQTT", "InfluxDB", "Grafana"],
      status: "completed",
      links: {
        github: "https://github.com/username/project5",
        live: "https://project5.com"
      }
    },
    {
      title: language === 'fr' ? "Projet 06" : "Project 06",
      description: language === 'fr' 
        ? "Intelligence Artificielle" 
        : "Artificial Intelligence",
      longDescription: language === 'fr'
        ? "Système de reconnaissance d'images basé sur le deep learning."
        : "Deep learning-based image recognition system.",
      image: "./images/test.png",
      tags: ["TensorFlow", "Python", "OpenCV", "Docker"],
      status: "in-progress",
      links: {
        github: "https://github.com/username/project6",
        live: "https://project6.com"
      }
    }
  ];

  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const handleCarouselSlide = useCallback((direction) => {
    const trackElement = document.querySelector('.carousel-track');
    if (!trackElement) return;

    if (direction === 'next' && currentSlide === totalSlides - 1) {
      // Animation vers la gauche pour aller au début
      const firstSlide = trackElement.children[0].cloneNode(true);
      trackElement.appendChild(firstSlide);
      
      requestAnimationFrame(() => {
        trackElement.style.transition = 'transform 0.8s cubic-bezier(0.45, 0, 0.25, 1)';
        trackElement.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;
        
        setTimeout(() => {
          trackElement.style.transition = 'none';
          trackElement.removeChild(firstSlide);
          trackElement.style.transform = `translateX(0%)`;
          setCurrentSlide(0);
        }, 800);
      });
    } else if (direction === 'prev' && currentSlide === 0) {
      // Animation vers la droite pour aller à la fin
      const lastSlide = trackElement.children[totalSlides - 1].cloneNode(true);
      trackElement.insertBefore(lastSlide, trackElement.firstChild);
      trackElement.style.transition = 'none';
      trackElement.style.transform = `translateX(-100%)`;
      
      requestAnimationFrame(() => {
        trackElement.style.transition = 'transform 0.8s cubic-bezier(0.45, 0, 0.25, 1)';
        trackElement.style.transform = `translateX(0%)`;
        
        setTimeout(() => {
          trackElement.removeChild(lastSlide);
          trackElement.style.transition = 'none';
          trackElement.style.transform = `translateX(-${(totalSlides - 1) * 100}%)`;
          setCurrentSlide(totalSlides - 1);
        }, 800);
      });
    } else {
      const nextSlide = direction === 'next'
        ? (currentSlide + 1) % totalSlides
        : (currentSlide - 1 + totalSlides) % totalSlides;
      
      trackElement.style.transition = 'transform 0.8s cubic-bezier(0.45, 0, 0.25, 1)';
      setCurrentSlide(nextSlide);
    }
  }, [currentSlide, totalSlides]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>{language === 'fr' ? 'Mes Projets' : 'My Projects'}</h2>
        
        <div className="carousel-container">
          <div className="preview-slide prev">
            {currentSlide > 0 && (
              <img 
                src={projects[currentSlide - 1].image} 
                alt="Previous project"
              />
            )}
          </div>
          
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array(totalSlides).fill().map((_, slideIndex) => (
              <div key={slideIndex} className="carousel-slide">
                <div className="projects-grid">
                  {projects
                    .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                    .map((project, index) => (
                      <div key={index} className="project-preview">
                        <div className="project-image-container">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="project-image"
                          />
                        </div>
                        <div className="project-content">
                          <div className="project-info stagger-animation">
                            <h3>{project.title}</h3>
                            <div className="project-status">
                              <span className={`status-badge ${project.status}`}>
                                {project.status === 'completed' 
                                  ? (language === 'fr' ? 'Terminé' : 'Completed')
                                  : (language === 'fr' ? 'En cours' : 'In Progress')}
                              </span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <p className="project-long-description">{project.longDescription}</p>
                            <div className="project-tags">
                              {project.tags.map((tag, i) => (
                                <span key={i} className="project-tag">{tag}</span>
                              ))}
                            </div>
                            <div className="project-links">
                              {project.links.github && (
                                <a 
                                  href={project.links.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="project-link"
                                >
                                  <IoLogoGithub />
                                  GitHub
                                </a>
                              )}
                              {project.links.live && (
                                <a 
                                  href={project.links.live} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="project-link"
                                >
                                  <IoGlobeOutline />
                                  Demo
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="preview-slide next">
            {currentSlide < projects.length - 1 && (
              <img 
                src={projects[currentSlide + 1].image} 
                alt="Next project"
              />
            )}
          </div>
        </div>

        <div className="projects-navigation-container">
          <div className="projects-navigation">
            <button 
              className="nav-button prev" 
              onClick={() => handleCarouselSlide('prev')}
              aria-label="Previous projects"
            >
              <IoArrowBack />
            </button>
            <div className="carousel-indicators">
              {Array(totalSlides).fill().map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button 
              className="nav-button next" 
              onClick={() => handleCarouselSlide('next')}
              aria-label="Next projects"
            >
              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 