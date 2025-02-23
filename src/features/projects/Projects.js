import React, { useState, useCallback, useEffect } from 'react';
import { IoArrowForward, IoArrowBack, IoLogoGithub, IoGlobeOutline } from 'react-icons/io5';
import './Projects.css';

const Projects = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const projectsPerSlide = window.innerWidth <= 1024 ? 1 : 2;
  const [imagesLoaded, setImagesLoaded] = useState({});

  const projects = [
    {
      title: language === 'fr' ? "Portfolio" : "Portfolio",
      description: language === 'fr' 
        ? "Design & Développement Web" 
        : "Web Design & Development",
      longDescription: language === 'fr'
        ? "Portfolio personnel développé avec React, mettant en avant mes compétences et projets."
        : "Personal portfolio developed with React, showcasing my skills and projects.",
      image: "/images/Portfolio.png",
      tags: ["React", "JavaScript", "CSS", "Responsive Design"],
      status: "completed",
      links: {
        github: "https://github.com/username/portfolio",
        live: "https://portfolio.com"
      }
    },
    {
      title: language === 'fr' ? "LoL Data" : "LoL Data",
      description: language === 'fr' 
        ? "Application Web de Statistiques" 
        : "Web Statistics Application",
      longDescription: language === 'fr'
        ? "Application d'analyse de données pour League of Legends utilisant l'API Riot Games."
        : "Data analysis application for League of Legends using the Riot Games API.",
      image: "/images/LoLData.png",
      tags: ["React", "API REST", "Data Visualization", "Node.js"],
      status: "in-progress",
      links: {
        github: "https://github.com/username/loldata",
        live: "https://loldata.com"
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

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.querySelector('.projects-section');
      if (!projectsSection) return;

      const rect = projectsSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
      
      setIsNavigationVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérification initiale

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour générer une description alt détaillée
  const getAltDescription = (project) => {
    const status = project.status === 'completed' ? 
      (language === 'fr' ? 'Projet terminé' : 'Completed project') : 
      (language === 'fr' ? 'Projet en cours' : 'Project in progress');
    
    return `${project.title} - ${project.description}. ${status}. ${
      language === 'fr' ? 
      `Technologies utilisées: ${project.tags.join(', ')}` : 
      `Technologies used: ${project.tags.join(', ')}`
    }`;
  };

  // Gestion de la navigation au clavier
  const handleKeyPress = useCallback((event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  }, []);

  const handleImageLoad = (projectId) => {
    setImagesLoaded(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>{language === 'fr' ? 'Mes Projets' : 'My Projects'}</h2>
        
        <div className="carousel-container">
          <div className="preview-slide prev">
            {currentSlide > 0 && (
              <img 
                src={projects[currentSlide * projectsPerSlide - 1].image} 
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
                    .map((project, index) => {
                      // Calculer le vrai numéro du projet
                      const projectNumber = slideIndex * projectsPerSlide + index + 1;
                      
                      return (
                        <div 
                          key={index} 
                          className="project-preview"
                          tabIndex={0}
                          role="button"
                          aria-label={language === 'fr' ? 
                            `Voir les détails de ${project.title}` : 
                            `View details of ${project.title}`
                          }
                          onKeyPress={(e) => handleKeyPress(e, () => {/* action au clic */})}
                        >
                          <div className="project-image-container">
                            <div className="progress-indicator">
                              {`${projectNumber}/${projects.length}`}
                            </div>
                            <img 
                              src={project.image} 
                              alt={getAltDescription(project)}
                              className={`project-image ${imagesLoaded[index] ? 'loaded' : ''}`}
                              loading="lazy"
                              onLoad={() => handleImageLoad(index)}
                              onError={(e) => {
                                e.target.src = './images/fallback.png';
                                e.target.alt = language === 'fr' ? 'Image non disponible' : 'Image not available';
                                handleImageLoad(index);
                              }}
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
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
          
          <div className="preview-slide next">
            {currentSlide < totalSlides - 1 && (
              <img 
                src={projects[(currentSlide + 1) * projectsPerSlide].image} 
                alt="Next project"
              />
            )}
          </div>
        </div>

        <div className="projects-navigation-container">
          <div className={`projects-navigation ${isNavigationVisible ? 'visible' : ''}`}>
            <button 
              className="nav-button prev" 
              onClick={() => handleCarouselSlide('prev')}
              aria-label={language === 'fr' ? "Projets précédents" : "Previous projects"}
              onKeyPress={(e) => handleKeyPress(e, () => handleCarouselSlide('prev'))}
            >
              <IoArrowBack />
            </button>
            
            <div className="carousel-indicators" role="tablist">
              {Array(totalSlides).fill().map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={language === 'fr' ? 
                    `Aller à la page ${index + 1} sur ${totalSlides}` : 
                    `Go to page ${index + 1} of ${totalSlides}`
                  }
                  aria-selected={index === currentSlide}
                  role="tab"
                  onKeyPress={(e) => handleKeyPress(e, () => setCurrentSlide(index))}
                />
              ))}
            </div>

            <button 
              className="nav-button next" 
              onClick={() => handleCarouselSlide('next')}
              aria-label={language === 'fr' ? "Projets suivants" : "Next projects"}
              onKeyPress={(e) => handleKeyPress(e, () => handleCarouselSlide('next'))}
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