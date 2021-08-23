import resumepdf from './pdfs/MLinder_resume2021.pdf';

const Resume = () => {
  return ( 
    <div className="resume">
    <section className="maincontent">
          <h2>Resume</h2>
          <div className="textcont">
              <p><a className="textlink" href={resumepdf}>View and download resume</a></p>
              <h4>Front-end proficiencies</h4>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>JQuery</p>
              <p>Responsive design</p>
              <p>React</p>              
              <p>Bootstrap</p>
              <h4>Back-end proficiencies</h4>
              <p>APIs</p>
              <p>Node</p>
              <p>Express</p>
              <p>MySQL, Sequelize</p>
              <p>MongoDB, Mongoose</p>
              <p>REST</p>
              <p>GraphQL</p>
          </div>
      </section>
  </div>
   );
}
 
export default Resume;