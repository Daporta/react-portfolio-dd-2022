import './index.css';
import React from 'react';

const Skills = () => {

    const devSkills = ['HTML5', 'CSS3', 'Sass', 'TailwindCSS', 'Javascript', 'JQuery', 'Wordpress', 'Elementor', 'ReactJS', 'Prisma', 'SQL']

    const hardSkills = ['GIT', 'Bilingual', 'Math, Algebra & Calculus', 'Microsoft Office', 'Scrum Agile Methodology', 'Databases', 'Algorithms And Data Structure']

    const softSkills = ['Flexibility & Adaptability', 'Empathy', 'Self-Taught Person', 'Effective Communication', 'Fast learner', 'Team Player', 'Problem-solver', 'Spanish (Native)', 'English (Fluent)']

    return (
      <div className="skills-content">
        <h2 className="skills-header">Skills</h2>
        <section className="skills-container">
          <div className="skill development">
            <h3>Development skills</h3>
            <ul className="list">
              {devSkills.map((devSkill, id) => {
                return <li key={id}>{devSkill}</li>;
              })}
            </ul>
          </div>
          <div className="skill useful">
            <h3>Hard skills</h3>
            <ul className="list">
              {hardSkills.map((hardSkills, id) => {
                return <li key={id}>{hardSkills}</li>;
              })}
            </ul>
          </div>

          <div className="skill soft">
            <h3>Soft skills</h3>
            <ul className="list">
              {softSkills.map((softSkill, id) => {
                return <li key={id}>{softSkill}</li>;
              })}
            </ul>
          </div>
        </section>
      </div>
    );
}

export default Skills;