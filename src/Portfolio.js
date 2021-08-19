import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'A', image: 'none', deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'A summary', description: 'A description' },
    { id: 2, title: 'B', image: 'none', deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'B summary', description: 'B description' },
    { id: 3, title: 'C', image: 'none', deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'C summary', description: 'C description' },
    { id: 4, title: 'D', image: 'none', deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'D summary', description: 'D description' },
    { id: 5, title: 'E', image: 'none', deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'E summary', description: 'E description' },
    { id: 6, title: 'F', image: 'none', deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'F summary', description: 'F description' },
  ]);

  return ( 
    <div className="portfolio">
    <h2>Portfolio</h2>
    {projects.map((project) => (
      <div className="project-preview" key={project.id}>
        <h2>{ project.title }</h2>
        <p>{ project.summary}</p>
      </div>
    ))}
  </div>
   );
}
 
export default Portfolio;