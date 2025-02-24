import React from 'react';
import './Skills.css';
import SkillsCarousel from '../../components/SkillsCarousel/SkillsCarousel';
import { 
  IoLogoJavascript, 
  IoLogoPython, 
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoGithub,
  IoPeople,
  IoCalendar,
  IoCompass,
  IoBulb,
  IoSearch,
  IoSync
} from 'react-icons/io5';
import {
  SiPhp,
  SiC,
  SiCplusplus,
  SiDotnet,
  SiReact,
  SiAngular,
  SiNodered,
  SiTableau,
  SiGrafana,
  SiJupyter,
  SiMicrosoftsqlserver,
  SiInfluxdb,
  SiSqlite,
  SiMysql
} from 'react-icons/si';
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
        { name: "JavaScript", level: 4, icon: <IoLogoJavascript /> },
        { name: "HTML", level: 4, icon: <IoLogoHtml5 /> },
        { name: "CSS", level: 4, icon: <IoLogoCss3 /> },
        { name: "Python", level: 3, icon: <IoLogoPython /> },
        { name: "C", level: 3, icon: <SiC /> },
        { name: "C++", level: 3, icon: <SiCplusplus /> },
        { name: "C#", level: 3, icon: <SiDotnet /> },
        { name: "PHP", level: 3, icon: <SiPhp /> },
        { name: "VBA", level: 2 }
      ]
    },
    {
      category: translations[currentLanguage].categories.frameworks.name,
      descriptionFr: "Frameworks et technologies que j'utilise",
      descriptionEn: "Frameworks and technologies I use",
      items: [
        { name: "React", level: 4, icon: <SiReact /> },
        { name: "Angular", level: 3, icon: <SiAngular /> },
        { name: "Node.js", level: 3, icon: <IoLogoNodejs /> },
        { name: "Node-RED", level: 3, icon: <SiNodered /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.data.name,
      descriptionFr: "Outils d'analyse et de visualisation de données",
      descriptionEn: "Data analysis and visualization tools",
      items: [
        { name: "Power BI", level: 3 },
        { name: "Tableau", level: 3, icon: <SiTableau /> },
        { name: "Grafana", level: 3, icon: <SiGrafana /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.ide.name,
      descriptionFr: "Environnements de développement",
      descriptionEn: "Development environments",
      items: [
        { name: "Visual Studio Code", level: 5 },
        { name: "PyCharm", level: 4 },
        { name: "Jupyter Notebook", level: 4, icon: <SiJupyter /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.databases.name,
      descriptionFr: "Bases de données et stockage",
      descriptionEn: "Databases and storage",
      items: [
        { name: "MySQL", level: 4, icon: <SiMysql /> },
        { name: "SQL Server", level: 4 },
        { name: "InfluxDB", level: 3, icon: <SiInfluxdb /> },
        { name: "SQLite", level: 3, icon: <SiSqlite /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.tools.name,
      descriptionFr: "Outils de développement",
      descriptionEn: "Development tools",
      items: [
        { name: "GitHub", level: 4, icon: <IoLogoGithub /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.methods.name,
      descriptionFr: "Méthodologies de travail",
      descriptionEn: "Work methodologies",
      items: [
        { name: "PDCA", level: 3, icon: <IoSync /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.softskills.name,
      descriptionFr: "Compétences interpersonnelles",
      descriptionEn: "Interpersonal skills",
      items: [
        { name: "Travail en équipe", level: 4, icon: <IoPeople /> },
        { name: "Organisation", level: 4, icon: <IoCalendar /> },
        { name: "Autonomie", level: 4, icon: <IoCompass /> },
        { name: "Résolution de problème", level: 4, icon: <IoBulb /> },
        { name: "Curiosité", level: 4, icon: <IoSearch /> }
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