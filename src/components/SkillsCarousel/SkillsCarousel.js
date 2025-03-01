import React, { useState, useCallback, useMemo, useRef, useEffect, Suspense, lazy } from 'react';
// eslint-disable-next-line no-unused-vars
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import './SkillsCarousel.css';

// Chargement dynamique des composants avec prefetch
const SkillCard = lazy(() => 
  import(/* webpackChunkName: "skill-card" */ './SkillCard')
);

const CategoryInfo = lazy(() => 
  import(/* webpackChunkName: "category-info" */ './CategoryInfo')
);

const CarouselNavigation = lazy(() => 
  import(/* webpackChunkName: "carousel-nav" */ './CarouselNavigation')
);

// Composant de chargement optimisé
const LoadingFallback = React.memo(() => (
  <div className="skill-card-skeleton">
    <div className="skill-icon-skeleton"></div>
    <div className="skill-info-skeleton">
      <div className="skill-name-skeleton"></div>
      <div className="skill-level-skeleton"></div>
    </div>
  </div>
));

const SkillsCarousel = ({ skills, language }) => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const timeoutRef = useRef(null);
  const observerRef = useRef(null);
  const carouselRef = useRef(null);
  const stateRef = useRef({ currentCategory, isAnimating });

  // Mettre à jour la référence de l'état
  useEffect(() => {
    stateRef.current = { currentCategory, isAnimating };
  }, [currentCategory, isAnimating]);

  useEffect(() => {
    // Gestionnaire pour le bfcache
    const handlePageShow = (event) => {
      if (event.persisted) {
        // Restaurer l'état si la page vient du bfcache
        setCurrentCategory(stateRef.current.currentCategory);
        setIsAnimating(false);
      }
    };

    const handlePageHide = () => {
      // Nettoyer les ressources avant la mise en cache
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };

    // Observer pour le chargement lazy
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observerRef.current.observe(carouselRef.current);
    }

    // Ajouter les écouteurs d'événements
    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('pagehide', handlePageHide);
    
    // Nettoyage
    return () => {
      handlePageHide();
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, []);

  const handleSlide = useCallback((direction) => {
    if (stateRef.current.isAnimating) return;
    
    setIsAnimating(true);
    
    if (direction === 'next') {
      setCurrentCategory((prev) => 
        prev === skills.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentCategory((prev) => 
        prev === 0 ? skills.length - 1 : prev - 1
      );
    }

    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  }, [skills.length]);

  const getSkillLevel = useCallback((level) => {
    if (language === 'fr') {
      switch(level) {
        case 1: return "Débutant";
        case 2: return "Intermédiaire";
        case 3: return "Avancé";
        case 4: return "Expert";
        default: return "Débutant";
      }
    } else {
      switch(level) {
        case 1: return "Beginner";
        case 2: return "Intermediate";
        case 3: return "Advanced";
        case 4: return "Expert";
        default: return "Beginner";
      }
    }
  }, [language]);

  const currentCategoryData = useMemo(() => ({
    category: skills[currentCategory].category,
    description: language === 'fr' ? 
      skills[currentCategory].descriptionFr : 
      skills[currentCategory].descriptionEn,
    items: skills[currentCategory].items
  }), [currentCategory, language, skills]);

  // Préchargement des composants
  useEffect(() => {
    const preloadComponents = async () => {
      const imports = [
        import(/* webpackChunkName: "skill-card" */ './SkillCard'),
        import(/* webpackChunkName: "category-info" */ './CategoryInfo'),
        import(/* webpackChunkName: "carousel-nav" */ './CarouselNavigation')
      ];
      await Promise.all(imports);
    };

    preloadComponents();
  }, []);

  return (
    <div className="skills-carousel" ref={carouselRef}>
      <div className="carousel-content">
        <Suspense fallback={<LoadingFallback />}>
          {isLoaded && (
            <>
              <CategoryInfo 
                category={currentCategoryData.category}
                description={currentCategoryData.description}
              />
              
              <div className="skills-grid">
                {currentCategoryData.items.map((skill) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    getSkillLevel={getSkillLevel}
                  />
                ))}
              </div>

              <CarouselNavigation 
                currentCategory={currentCategory}
                skillsLength={skills.length}
                handleSlide={handleSlide}
                setCurrentCategory={setCurrentCategory}
              />
            </>
          )}
        </Suspense>
      </div>
    </div>
  );
};

// Mémoisation du composant principal
export default React.memo(SkillsCarousel); 