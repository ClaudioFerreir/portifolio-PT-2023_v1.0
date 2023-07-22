import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiPython,
  DiRuby,
  DiMysql,
  DiPostgresql,
  DiDocker
} from 'react-icons/di';

import {
  SiRubyonrails,
  SiCucumber
} from 'react-icons/si';

import {
  GiCapybara
} from 'react-icons/gi';

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: 'html', name: 'HTML5', icon: <DiHtml5 />},
  {id: 'css', name: 'CSS3', icon: <DiCss3 />},
  {id: 'js', name: 'JavaScript', icon: <DiJsBadge />},
  {id: 'node', name: 'Node.js', icon: <DiNodejsSmall />},
  {id: 'python', name: 'Python', icon: <DiPython />},
  {id: 'ruby', name: 'Ruby', icon: <DiRuby />},
  {id: 'rails', name: 'Rails', icon: <SiRubyonrails />},
  {id: 'mysql', name: 'MySQL', icon: <DiMysql />},
  {id: 'postgresql', name: 'PostgreSQL', icon: <DiPostgresql />},
  {id: 'docker', name: 'Docker', icon: <DiDocker />},
  {id: 'capybara', name: 'Capybara', icon: <GiCapybara />},
  {id: 'cucumber', name: 'Cucumber', icon: <SiCucumber />}
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            <div>{tech.icon}</div>
            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
)}

export default TechnologiesContainer;