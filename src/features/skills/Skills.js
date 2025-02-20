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
          name: "Langages de programmation",
          description: "Les langages de programmation que je maîtrise pour développer des applications performantes"
        },
        frontend: {
          name: "Frontend",
          description: "Technologies front-end pour créer des interfaces utilisateur modernes et réactives"
        },
        backend: {
          name: "Backend",
          description: "Technologies back-end pour développer des API robustes et évolutives"
        },
        tools: {
          name: "Outils & Autres",
          description: "Outils et technologies complémentaires pour un développement efficace"
        }
      }
    },
    en: {
      title: 'Skills',
      categories: {
        programming: {
          name: "Programming Languages",
          description: "Programming languages I master to develop high-performance applications"
        },
        frontend: {
          name: "Frontend",
          description: "Front-end technologies to create modern and responsive user interfaces"
        },
        backend: {
          name: "Backend",
          description: "Back-end technologies to develop robust and scalable APIs"
        },
        tools: {
          name: "Tools & Others",
          description: "Complementary tools and technologies for efficient development"
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
      descriptionFr: translations.fr.categories.programming.description,
      descriptionEn: translations.en.categories.programming.description,
      items: [
        { name: "C", icon: <SiC />, level: 1 },
        { name: "C++", icon: <SiCplusplus />, level: 1 },
        { name: "C#", icon: <SiDotnet />, level: 1 },
        { name: "JavaScript (ES6+)", icon: <IoLogoJavascript />, level: 3 },
        { name: "Python", icon: <IoLogoPython />, level: 3 },
        { name: "HTML5", icon: <IoLogoHtml5 />, level: 5 },
        { name: "CSS3", icon: <IoLogoCss3 />, level: 3 },
        { name: "TypeScript", icon: <SiTypescript />, level: 4 },
        { name: "Java", icon: <DiJava />, level: 3 },
        { name: "PHP", icon: <SiPhp />, level: 3 },
        { name: "SQL", icon: <SiMysql />, level: 4 }
      ]
    },
    {
      category: translations[currentLanguage].categories.frontend.name,
      descriptionFr: translations.fr.categories.frontend.description,
      descriptionEn: translations.en.categories.frontend.description,
      items: [
        { name: "React.js", icon: <SiReact />, level: 5 },
        { name: "Vue.js", icon: <SiVuedotjs />, level: 4 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 4 },
        { name: "HTML5/CSS3", icon: <IoLogoHtml5 />, level: 5 },
        { name: "SASS/SCSS", icon: <SiSass />, level: 4 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 4 }
      ]
    },
    {
      category: translations[currentLanguage].categories.backend.name,
      descriptionFr: translations.fr.categories.backend.description,
      descriptionEn: translations.en.categories.backend.description,
      items: [
        { name: "Node.js", icon: <SiNodedotjs />, level: 5 },
        { name: "Express.js", icon: <SiExpress />, level: 4 },
        { name: "Django", icon: <SiDjango />, level: 3 },
        { name: "Laravel", icon: <SiLaravel />, level: 3 },
        { name: "Spring Boot", icon: <SiSpring />, level: 3 },
        { name: "GraphQL", icon: <SiGraphql />, level: 4 }
      ]
    },
    {
      category: translations[currentLanguage].categories.tools.name,
      descriptionFr: translations.fr.categories.tools.description,
      descriptionEn: translations.en.categories.tools.description,
      items: [
        { name: "Git/GitHub", icon: <IoLogoGithub />, level: 5 },
        { name: "Docker", icon: <IoLogoDocker />, level: 4 },
        { name: "AWS", icon: <SiAmazonwebservices />, level: 3 },
        { name: "NPM/Yarn", icon: <IoLogoNpm />, level: 5 },
        { name: "Jest/Testing", icon: <SiJest />, level: 4 },
        { name: "Agile/Jira", icon: <SiJira />, level: 4 }
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