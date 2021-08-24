// It isn't really necessary for this to be split this out from the Portfolio component,
// except that it's an excuse to use props, which is what the { projects, heading } 
// in the first line of code is doing (via destructuring).
const ProjectList = ({ projects, heading }) => {

  return ( 
    <section className="maincontent" id="work">

      <h2>Portfolio</h2>
      <div className="cards">
        <div className="cardcontainer">

          {projects.map((project) => (
            <figure className="cardfig" key={project.id}>
              <div className="img__wrap">
                <img src={ project.image } alt="The Marvelizer web app"></img>
                <div className="img__description_layer">
                  <p className="img__description"> <span className="proj_title">{ project.title }</span>
                    { project.description }<br/><br />
                    Deployed: <a className='proj_links' href={ project.deployed }>{ project.deployed }</a><br />
                    { project.github && <span>GitHub: <a className='proj_links' href={ project.github }>{ project.github }</a></span>}
                  </p>
                </div>
                <div className="cardinset">
                    <h3>{ project.title }<br />{ project.summary }</h3>
                    <p>Hover for details</p>
                </div>
              </div>
            </figure>
          ))}

        </div>
      </div>
    </section>
   );
}

export default ProjectList;