import { useState } from "react";
import ProjectList from "./ProjectList";
import marvelizer from './images/Marvelizer2.jpg';


const Portfolio = () => {
  const [projects, setProjects] = useState([
    { id: 0, title: 'The MARVELizer', image: marvelizer, deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'A summary', description: ' is a web app that enables you to search for a Marvel character, view information and Giphys related to the character, and save favorite Giphys. The search feature queries the Marvel API for a character’s description and a thumbnail, and it uses the character name to query the Giphy API for the Giphys related to the character. <br /> This application utilizes <b>Foundation</b>, <b>APIs</b> (Marvel and Giphy), <b>JQuery</b>, <b>JavaScript</b>, and <b>local storage</b>.<br /> <br /><a className="proj_links" href="https://github.com/mlin901/Marvelizer"> ➤&nbsp;&nbsp;GitHub repo</a><br /><a class="proj_links" href="https://zoneam.github.io/Marvelizer/"> ➤&nbsp;&nbsp;Published site</a>' },
    { id: 1, title: 'B', image: 'none', deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'B summary', description: 'B description' },
    { id: 2, title: 'C', image: 'none', deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'C summary', description: 'C description' },
    { id: 3, title: 'D', image: 'none', deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'D summary', description: 'D description' },
    { id: 4, title: 'E', image: 'none', deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'E summary', description: 'E description' },
    { id: 5, title: 'F', image: 'none', deployed: 'https://wwww.google.com', github: 'https://wwww.google.com', summary: 'F summary', description: 'F description' },
  ]);

  return ( 
    <section class="maincontent" id="work">
      <h2>Portfolio</h2>
        <div class="cards">
          <div class="cardcontainer">
            <figure class="cardfig">
              <div class="img__wrap">
                <img src={ projects[0].image } alt="The Marvelizer web app"></img>
                <div class="img__description_layer">
                  <p class="img__description"> <span class="proj_title">{ projects[0].title }</span>
                    { projects[0].description }
                  </p>
                </div>


              </div>
            </figure>
          </div>
        </div>



    </section>
   );
}
 
export default Portfolio;


{/* <div className="portfolio">
<ProjectList projects={projects} heading="Portfolio" />
</div> */}