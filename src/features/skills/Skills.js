import React from 'react';
import './Skills.css';
import SkillsCarousel from '../../components/SkillsCarousel/SkillsCarousel';
import { 
  IoLogoJavascript, 
  IoLogoPython, 
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoGithub,
  IoLogoNpm,
  IoLogoDocker
} from 'react-icons/io5';
import {
  SiTypescript,
  SiPhp,
  SiMysql,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiLaravel,
  SiSpring,
  SiGraphql,
  SiAmazonwebservices,
  SiJest,
  SiJira,
  SiC,
  SiCplusplus,
  SiDotnet
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { useLanguage } from '../../context/LanguageContext';

const Skills = () => {
  const { language } = useLanguage();
  
  // Ajout d'un console.log pour déboguer
  console.log('Current language in Skills:', language);
  
  // Déplacer les descriptions dans des objets de traduction
  const translations = {
    fr: {
      title: 'Compétences',
      categories: {
        programming: {
          name: "Langages de Programmation",
          description: "Les langages de programmation que je maîtrise"
        },
        frameworks: {
          name: "Frameworks & Technologies",
          description: "Frameworks et technologies que j'utilise"
        },
        data: {
          name: "Outils Data & Analytics",
          description: "Outils d'analyse et de visualisation de données"
        },
        ide: {
          name: "Environnements & IDE",
          description: "Environnements de développement intégrés"
        },
        databases: {
          name: "Bases de Données",
          description: "Systèmes de gestion de bases de données"
        },
        tools: {
          name: "Outils de Développement",
          description: "Outils pour le développement et le déploiement"
        },
        methods: {
          name: "Méthodologies",
          description: "Méthodes et pratiques de travail"
        },
        softskills: {
          name: "Soft Skills",
          description: "Compétences interpersonnelles"
        }
      }
    },
    en: {
      title: 'Skills',
      categories: {
        programming: {
          name: "Programming Languages",
          description: "Programming languages I master"
        },
        frameworks: {
          name: "Frameworks & Technologies",
          description: "Frameworks and technologies I use"
        },
        data: {
          name: "Data Analysis & Visualization",
          description: "Data analysis and visualization tools"
        },
        ide: {
          name: "Development Environments & IDE",
          description: "Development environments"
        },
        databases: {
          name: "Databases",
          description: "Databases and storage"
        },
        tools: {
          name: "Development Tools",
          description: "Development tools"
        },
        methods: {
          name: "Work Methodologies",
          description: "Work methodologies"
        },
        softskills: {
          name: "Soft Skills",
          description: "Interpersonal skills"
        }
      }
    }
  };

  // Vérification de sécurité modifiée pour le débogage
  const currentLanguage = language && (language === 'fr' || language === 'en') ? language : 'fr';
  console.log('Processed language:', currentLanguage);

  const skills = [
    {
      category: translations[currentLanguage].categories.programming.name,
      descriptionFr: "Les langages de programmation que je maîtrise",
      descriptionEn: "Programming languages I master",
      items: [
        { name: "JavaScript", level: 4 }
      ]
    },
    {
      category: translations[currentLanguage].categories.frameworks.name,
      descriptionFr: "Frameworks et technologies que j'utilise",
      descriptionEn: "Frameworks and technologies I use",
      items: [
        { name: "React", level: 4 }
      ]
    },
    {
      category: translations[currentLanguage].categories.data.name,
      descriptionFr: "Outils d'analyse et de visualisation de données",
      descriptionEn: "Data analysis and visualization tools",
      items: [
        { name: "Power BI", level: 3 }
      ]
    },
    {
      category: translations[currentLanguage].categories.ide.name,
      descriptionFr: "Environnements de développement",
      descriptionEn: "Development environments",
      items: [
        { name: "Visual Studio Code", level: 5 }
      ]
    },
    {
      category: translations[currentLanguage].categories.databases.name,
      descriptionFr: "Bases de données et stockage",
      descriptionEn: "Databases and storage",
      items: [
        { name: "MySQL", level: 4 }
      ]
    },
    {
      category: translations[currentLanguage].categories.tools.name,
      descriptionFr: "Outils de développement",
      descriptionEn: "Development tools",
      items: [
        { name: "Git", level: 4 }
      ]
    },
    {
      category: translations[currentLanguage].categories.methods.name,
      descriptionFr: "Méthodologies de travail",
      descriptionEn: "Work methodologies",
      items: [
        { name: "Agile/Scrum", level: 3 }
      ]
    },
    {
      category: translations[currentLanguage].categories.softskills.name,
      descriptionFr: "Compétences interpersonnelles",
      descriptionEn: "Interpersonal skills",
      items: [
        { name: "Travail en équipe", level: 4 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>{translations[currentLanguage].title}</h2>
        <SkillsCarousel skills={skills} language={currentLanguage} />
      </div>
    </section>
  );
};

export default Skills; 