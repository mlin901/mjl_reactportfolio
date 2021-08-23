import { useState } from "react";
import ProjectList from "./ProjectList";
import marvelizer from './images/Marvelizer2.jpg';
import carboloader from './images/carboLoader2.jpg';
import techblog from './images/techBlog.jpg';
import weatherdashboard from './images/weatherAppScreenshot.png';
import workdayscheduler from './images/CalendarAppScreenCap.jpg';
import sdedoc from './images/sdedoc.jpg';

const Portfolio = () => {
  const [projects, setProjects] = useState([
    { id: 0, title: 'The MARVELizer', image: marvelizer, deployed: 'https://zoneam.github.io/Marvelizer/', 
      github: 'https://github.com/mlin901/Marvelize', 
      summary: 'Giphys for Marvel characters', 
      description: ` is a web app that enables you to search for a Marvel character, view information and Giphys related to the character, 
                    and save favorite Giphys. The search feature queries the Marvel API for a character’s description and a thumbnail, and 
                    it uses the character name to query the Giphy API for the Giphys related to the character. <br /> This application 
                    utilizes Foundation, APIs (Marvel and Giphy), JQuery, JavaScript, and local storage.` 
    },
    { id: 1, title: 'Carbo-Loader', image: carboloader, deployed: 'https://infinite-stream-14480.herokuapp.com/', 
      github: 'https://github.com/mlin901/carb_counter', 
      summary: 'Caculate carbs for meals', 
      description: ` enables users to track carbohydrates for their meals. The Nutritionix API node module is used to search and capture 
                    carbohydrate and fiber content, and users can also search for specific quantities. The search results can be added to a
                    user's current meal and a carbohydrate total for the entire meal is tallied. Individual foods can be marked as a 
                    favorite for easy retrieval later and meals can be saved for future reference. <br />This application utilizes 
                    Node.js, a MySQL database, Express server, Handlebars, Sequelize ORM, Express Session middleware for cookies, and
                    bcrypt for password protection.` 
    },
    { id: 2, title: 'The Tech Blog', image: techblog, deployed: 'https://secure-ridge-69918.herokuapp.com/', 
      github: 'https://github.com/mlin901/theDopeOnDev', 
      summary: 'The real scoop on tech', 
      description: ` is a blog site that enables you to view blog posts, and if you're logged in, it enables you to add, edit, delete, and 
                    comment on blog posts. <br />This app follows the MVC paradigm and uses the following technologies: Node.js, the 
                    dotenv npm package, Handlebars.js, Express.js, the express-session npm package, 
                    Heroku, Sequelize.js, the bcrypt npm package, and the connect-session-sequelize npm package.` 
    },
    { id: 3, title: 'Weather Dashboard', image: weatherdashboard, deployed: 'https://mlin901.github.io/mjl-weatherDashboard/', 
      github: 'https://github.com/mlin901/mjl-weatherDashboard', 
      summary: 'Retrieve weather data for cities', 
      description: ` is a web app that uses the OpenWeather API to retrieve weather data for cities. When user enters a city name and clicks
                    Go, the dashbard app uses the city name for two API searches, populates data area (upper right) with city info, populates
                    the forcast area (lower right) with forcast information for the next five days, saves name of the city to local storage 
                    and retrieves saved city names when the page is opened or refreshed, and adds the city name to a list that can be used 
                    for future searches.` 
    },
    { id: 4, title: 'Work Day Scheduler', image: workdayscheduler, deployed: 'https://mlin901.github.io/mjl-calendarApp/', 
      github: 'https://github.com/mlin901/mjl-calendarApp', 
      summary: "Schedule the day's tasks", 
      description: ` is a calendar app that associates tasks with timeblocks in the day. Tasks are saved to local storage, and when the app
                    is opened or refreshed, tasks are retrieved from local storage and displayed in their associated timeblocks.<br />
                    This application is built with the following: Moment.js, Bootstrap, Font Awsome, JavaScript,
                    and JQuery.` 
    },
    { id: 5, title: 'Synergy/DE documentation', image: sdedoc, deployed: 'https://www.synergex.com/docs/', 
      summary: '>Synergy DBL documentation', 
      description: ` is the documentation for Synergy DBL, which is the modern version of the DIBOL language. It includes various 
                    development tools. This documentation is created with MadCap Flare, JavaScript, JQuery, 
                    and C# post-build processing programs.` 
    },
  ]);

  return ( 
    <section class="maincontent" id="work">
      <div className="portfolio">
        <ProjectList projects={projects} heading="Portfolio" />
      </div>
    </section>
   );
}
 
export default Portfolio;