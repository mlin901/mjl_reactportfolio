import { useState } from "react";
import ProjectList from "./ProjectList";

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
    <section class="maincontent" id="work">
      <h2>Portfolio</h2>
        <div class="cards">
          <div class="cardcontainer">
            <figure class="cardfig">
              <div class="img__wrap">

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