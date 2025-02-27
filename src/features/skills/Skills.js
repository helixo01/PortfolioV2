import React, { useMemo } from 'react';
import './Skills.css';
import SkillsCarousel from '../../components/SkillsCarousel/SkillsCarousel';
import { translations } from './translations';
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
  SiInfluxdb,
  SiSqlite,
  SiMysql
} from 'react-icons/si';
import { useLanguage } from '../../context/LanguageContext';

// Précharger les images
const preloadImages = () => {
  const images = [
    '/images/logos/Power-BI.png',
    '/images/logos/vstudio.png',
    '/images/logos/pycharm.png',
    '/images/logos/sqlserver.png'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

const Skills = () => {
  const { language } = useLanguage();
  
  // Précharger les images au montage du composant
  React.useEffect(() => {
    preloadImages();
  }, []);
  
  const currentLanguage = language && (language === 'fr' || language === 'en') ? language : 'fr';

  const skills = useMemo(() => [
    {
      category: translations[currentLanguage].categories.programming.name,
      descriptionFr: translations.fr.categories.programming.description,
      descriptionEn: translations.en.categories.programming.description,
      items: [
        { name: "JavaScript", level: 3, icon: <IoLogoJavascript /> },
        { name: "HTML", level: 3, icon: <IoLogoHtml5 /> },
        { name: "CSS", level: 3, icon: <IoLogoCss3 /> },
        { name: "Python", level: 2, icon: <IoLogoPython /> },
        { name: "C", level: 2, icon: <SiC /> },
        { name: "C++", level: 2, icon: <SiCplusplus /> },
        { name: "C#", level: 2, icon: <SiDotnet /> },
        { name: "PHP", level: 2, icon: <SiPhp /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.frameworks.name,
      descriptionFr: translations.fr.categories.frameworks.description,
      descriptionEn: translations.en.categories.frameworks.description,
      items: [
        { name: "React", level: 2, icon: <SiReact /> },
        { name: "Angular", level: 1, icon: <SiAngular /> },
        { name: "Node.js", level: 1, icon: <IoLogoNodejs /> },
        { name: "Node-RED", level: 2, icon: <SiNodered /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.data.name,
      descriptionFr: translations.fr.categories.data.description,
      descriptionEn: translations.en.categories.data.description,
      items: [
        { 
          name: "Power BI", 
          level: 3, 
          icon: <img src="/images/logos/Power-BI.png" alt="Power BI" style={{ width: '24px', height: '24px' }} />
        },
        { name: "Tableau", level: 1, icon: <SiTableau /> },
        { name: "Grafana", level: 1, icon: <SiGrafana /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.ide.name,
      descriptionFr: translations.fr.categories.ide.description,
      descriptionEn: translations.en.categories.ide.description,
      items: [
        { 
          name: "Visual Studio Code", 
          level: 4,
          icon: <img src="/images/logos/vstudio.png" alt="Visual Studio Code" style={{ width: '24px', height: '24px' }} />
        },
        { 
          name: "PyCharm", 
          level: 1,
          icon: <img src="/images/logos/pycharm.png" alt="PyCharm" style={{ width: '24px', height: '24px' }} />
        },
        { name: "Jupyter Notebook", level: 2, icon: <SiJupyter /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.databases.name,
      descriptionFr: translations.fr.categories.databases.description,
      descriptionEn: translations.en.categories.databases.description,
      items: [
        { name: "MySQL", level: 3, icon: <SiMysql /> },
        { 
          name: "SQL Server", 
          level: 3,
          icon: <img src="/images/logos/sqlserver.png" alt="SQL Server" style={{ width: '24px', height: '24px' }} />
        },
        { name: "InfluxDB", level: 2, icon: <SiInfluxdb /> },
        { name: "SQLite", level: 2, icon: <SiSqlite /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.tools.name,
      descriptionFr: translations.fr.categories.tools.description,
      descriptionEn: translations.en.categories.tools.description,
      items: [
        { name: "GitHub", level: 2, icon: <IoLogoGithub /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.methods.name,
      descriptionFr: translations.fr.categories.methods.description,
      descriptionEn: translations.en.categories.methods.description,
      items: [
        { name: "PDCA", level: 3, icon: <IoSync /> }
      ]
    },
    {
      category: translations[currentLanguage].categories.softskills.name,
      descriptionFr: translations.fr.categories.softskills.description,
      descriptionEn: translations.en.categories.softskills.description,
      items: [
        { name: "Travail en équipe", level: 3, icon: <IoPeople /> },
        { name: "Organisation", level: 4, icon: <IoCalendar /> },
        { name: "Autonomie", level: 4, icon: <IoCompass /> },
        { name: "Résolution de problème", level: 3, icon: <IoBulb /> },
        { name: "Curiosité", level: 3, icon: <IoSearch /> }
      ]
    }
  ], [currentLanguage]);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>{translations[currentLanguage].title}</h2>
        <SkillsCarousel skills={skills} language={currentLanguage} />
      </div>
    </section>
  );
};

export default React.memo(Skills); 