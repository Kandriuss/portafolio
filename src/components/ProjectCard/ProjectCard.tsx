import React, { useState, useEffect, useCallback } from "react";
import styles from "./ProjectCard.module.css";

interface Project {
  id: number;
  projectName: string;
  description: string;
  projectLink: string;
}

interface ProjectCardProps {
  projects: Project[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextProject = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 300);
  }, [projects.length, isAnimating]);

  const previousProject = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 300);
  }, [projects.length, isAnimating]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      previousProject();
    } else if (event.key === 'ArrowRight') {
      nextProject();
    }
  }, [previousProject, nextProject]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const currentProject = projects[currentProjectIndex];

  const handleLinkClick = () => {
    if (currentProject.projectLink) {
      window.open(currentProject.projectLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.cardContainer}>
      {/* Tarjeta principal */}
      <div className={`${styles.mainCard} ${isAnimating ? styles.animating : ''}`}>
        <div className={styles.cardContent}>
          <h3 className={styles.projectName}>{currentProject.projectName}</h3>
          <p className={styles.description}>{currentProject.description}</p>
          <div className={styles.linkSection}>
            <p 
              className={styles.linkText}
              onClick={handleLinkClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleLinkClick();
                }
              }}
            >
              {currentProject.projectLink}
            </p>
            <p className={styles.linkText}>ACCEDER</p>
          </div>
        </div>
      </div>
      
      {/* Tarjeta apilada (segunda) */}
      <div className={styles.stackedCard}>
        <div className={styles.cardContent}>
          <h3 className={styles.projectName}>{currentProject.projectName}</h3>
          <p className={styles.description}>{currentProject.description}</p>
          <div className={styles.linkSection}>
            <p className={styles.linkText}>{currentProject.projectLink}</p>
            {/* <p className={styles.linkText}>PARA ACCEDER A LA</p> */}
            {/* <p className={styles.linkText}>PAGINA</p> */}
          </div>
        </div>
      </div>
      
      {/* Tarjeta apilada (tercera) */}
      <div className={styles.stackedCard}>
        <div className={styles.cardContent}>
          <h3 className={styles.projectName}>{currentProject.projectName}</h3>
          <p className={styles.description}>{currentProject.description}</p>
          <div className={styles.linkSection}>
            <p className={styles.linkText}>{currentProject.projectLink}</p>
            {/* <p className={styles.linkText}>PARA ACCEDER A LA</p>
            <p className={styles.linkText}>PAGINA</p> */}
          </div>
        </div>
      </div>

      {/* Controles de navegación */}
      <div className={styles.navigationControls}>
        <button 
          className={styles.navButton} 
          onClick={previousProject}
          disabled={isAnimating}
          aria-label="Proyecto anterior"
          title="Proyecto anterior (←)"
        >
          ← Anterior
        </button>
        
        <div className={styles.projectIndicator}>
          {currentProjectIndex + 1} / {projects.length}
        </div>
        
        <button 
          className={styles.navButton} 
          onClick={nextProject}
          disabled={isAnimating}
          aria-label="Siguiente proyecto"
          title="Siguiente proyecto (→)"
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};