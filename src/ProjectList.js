// It isn't really necessary to split this out from the Portfolio component,
// except that enables me to use props, which is what the { projects, heading } 
// in the first line of code is doing (via destructuring).
const ProjectList = ({ projects, heading }) => {

  return ( 
    <section class="maincontent" id="work">

      <h2>Portfolio</h2>
      <div className="cards">
        <div className="cardcontainer">

          {projects.map((project) => (
            <figure className="cardfig">
              <div className="img__wrap">
                <img src={ project.image } alt="The Marvelizer web app"></img>
                <div className="img__description_layer">
                  <p className="img__description"> <span className="proj_title">{ project.title }</span>
                    { project.description }<br/><br />
                    Deployed: <a className='proj_links' href={ project.deployed }>{ project.deployed }</a><br />
                    {/* Not all projects have a github repo, which makes the following conditinal template necessary */}
                    { project.github && <div>GitHub: <a className='proj_links' href={ project.github }>{ project.github }</a></div>}
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