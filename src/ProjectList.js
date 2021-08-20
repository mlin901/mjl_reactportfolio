// It isn't really necessary to split this out from the Portfolio component,
// except that enables me to use props, which is what the { projects, heading } 
// in the first line of code is doing (via destructuring).
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