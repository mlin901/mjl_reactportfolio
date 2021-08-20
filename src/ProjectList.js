const ProjectList = ({ projects, heading }) => {

  return ( 
    <div className="project-list">
      <h2>{ heading }</h2>
      {projects.map((project) => (
        <div className="project-preview" key={project.id}>
          <h2>{ project.title }</h2>
          <p>{ project.summary}</p>
        </div>
      ))}
    </div>
   );
}
 
export default ProjectList;