(this.webpackJsonpmjl_reactportfolio=this.webpackJsonpmjl_reactportfolio||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),c=a(16),r=a.n(c),n=(a(22),a(7)),o=a(8),l=a(0),d=function(){var e=Object(i.useState)("Matthew Linder"),t=Object(n.a)(e,2),a=t[0];t[1];return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:a}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"links",children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{exact:!0,activeClassName:"active",to:"/mjl_reactportfolio/",children:"About me"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{exact:!0,activeClassName:"active",to:"/mjl_reactportfolio/portfolio",children:"Portfolio"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{exact:!0,activeClassName:"active",to:"/mjl_reactportfolio/contact",children:"Contact"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{exact:!0,activeClassName:"active",to:"/mjl_reactportfolio/resume",children:"Resume"})})]})})]})},h=function(){return Object(l.jsx)("div",{className:"aboutme",children:Object(l.jsxs)("section",{class:"maincontent",id:"aboutme",children:[Object(l.jsx)("h2",{children:"About me"}),Object(l.jsx)("div",{class:"textcont",children:Object(l.jsx)("p",{children:"Web Developer with experience in all phases of software product development, from requirements and coding to quality assurance testing and post-implementation support. Earned a Certificate in Full Stack Web Development from the University of California, Davis, with expertise in JavaScript, jQuery, Node.js, React and more. Team-player focused on collaborative success, with excellent written and verbal communication skills. Valued for developing robust solutions that bring lasting value through optimized and efficient processes. Over ten years of experience in transforming labor-intensive manual workflows into automated, scripted processes that improve customer outcomes."})})]})})},j=function(e){var t=e.projects;e.heading;return Object(l.jsxs)("section",{class:"maincontent",id:"work",children:[Object(l.jsx)("h2",{children:"Portfolio"}),Object(l.jsx)("div",{className:"cards",children:Object(l.jsx)("div",{className:"cardcontainer",children:t.map((function(e){return Object(l.jsx)("figure",{className:"cardfig",children:Object(l.jsxs)("div",{className:"img__wrap",children:[Object(l.jsx)("img",{src:e.image,alt:"The Marvelizer web app"}),Object(l.jsx)("div",{className:"img__description_layer",children:Object(l.jsxs)("p",{className:"img__description",children:[" ",Object(l.jsx)("span",{className:"proj_title",children:e.title}),e.description,Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Deployed: ",Object(l.jsx)("a",{className:"proj_links",href:e.deployed,children:e.deployed}),Object(l.jsx)("br",{}),e.github&&Object(l.jsxs)("div",{children:["GitHub: ",Object(l.jsx)("a",{className:"proj_links",href:e.github,children:e.github})]})]})}),Object(l.jsxs)("div",{className:"cardinset",children:[Object(l.jsxs)("h3",{children:[e.title,Object(l.jsx)("br",{}),e.summary]}),Object(l.jsx)("p",{children:"Hover for details"})]})]})})}))})})]})},p=a.p+"static/media/Marvelizer2.44cbb269.jpg",b=a.p+"static/media/carboLoader2.8cf2dde3.jpg",u=a.p+"static/media/techBlog.2285132f.jpg",m=a.p+"static/media/weatherAppScreenshot.c1d46ef4.png",x=a.p+"static/media/CalendarAppScreenCap.959a2016.jpg",O=a.p+"static/media/sdedoc.362fcdfc.jpg",f=function(){var e=Object(i.useState)([{id:0,title:"The MARVELizer",image:p,deployed:"https://zoneam.github.io/Marvelizer/",github:"https://github.com/mlin901/Marvelize",summary:"Giphys for Marvel characters",description:" is a web app that enables you to search for a Marvel character, view information and Giphys related to the character, \n                    and save favorite Giphys. The search feature queries the Marvel API for a character\u2019s description and a thumbnail, and \n                    it uses the character name to query the Giphy API for the Giphys related to the character. <br /> This application \n                    utilizes Foundation, APIs (Marvel and Giphy), JQuery, JavaScript, and local storage."},{id:1,title:"Carbo-Loader",image:b,deployed:"https://infinite-stream-14480.herokuapp.com/",github:"https://github.com/mlin901/carb_counter",summary:"Caculate carbs for meals",description:" enables users to track carbohydrates for their meals. The Nutritionix API node module is used to search and capture \n                    carbohydrate and fiber content, and users can also search for specific quantities. The search results can be added to a\n                    user's current meal and a carbohydrate total for the entire meal is tallied. Individual foods can be marked as a \n                    favorite for easy retrieval later and meals can be saved for future reference. <br />This application utilizes \n                    Node.js, a MySQL database, Express server, Handlebars, Sequelize ORM, Express Session middleware for cookies, and\n                    bcrypt for password protection."},{id:2,title:"The Tech Blog",image:u,deployed:"https://secure-ridge-69918.herokuapp.com/",github:"https://github.com/mlin901/theDopeOnDev",summary:"The real scoop on tech",description:" is a blog site that enables you to view blog posts, and if you're logged in, it enables you to add, edit, delete, and \n                    comment on blog posts. <br />This app follows the MVC paradigm and uses the following technologies: Node.js, the \n                    dotenv npm package, Handlebars.js, Express.js, the express-session npm package, \n                    Heroku, Sequelize.js, the bcrypt npm package, and the connect-session-sequelize npm package."},{id:3,title:"Weather Dashboard",image:m,deployed:"https://mlin901.github.io/mjl-weatherDashboard/",github:"https://github.com/mlin901/mjl-weatherDashboard",summary:"Retrieve weather data for cities",description:" is a web app that uses the OpenWeather API to retrieve weather data for cities. When user enters a city name and clicks\n                    Go, the dashbard app uses the city name for two API searches, populates data area (upper right) with city info, populates\n                    the forcast area (lower right) with forcast information for the next five days, saves name of the city to local storage \n                    and retrieves saved city names when the page is opened or refreshed, and adds the city name to a list that can be used \n                    for future searches."},{id:4,title:"Work Day Scheduler",image:x,deployed:"https://mlin901.github.io/mjl-calendarApp/",github:"https://github.com/mlin901/mjl-calendarApp",summary:"Schedule the day's tasks",description:" is a calendar app that associates tasks with timeblocks in the day. Tasks are saved to local storage, and when the app\n                    is opened or refreshed, tasks are retrieved from local storage and displayed in their associated timeblocks.<br />\n                    This application is built with the following: Moment.js, Bootstrap, Font Awsome, JavaScript,\n                    and JQuery."},{id:5,title:"Synergy/DE documentation",image:O,deployed:"https://www.synergex.com/docs/",summary:">Synergy DBL documentation",description:" is the documentation for Synergy DBL, which is the modern version of the DIBOL language. It includes various \n                    development tools. This documentation is created with MadCap Flare, JavaScript, JQuery, \n                    and C# post-build processing programs."}]),t=Object(n.a)(e,2),a=t[0];t[1];return Object(l.jsx)("section",{class:"maincontent",id:"work",children:Object(l.jsx)("div",{className:"portfolio",children:Object(l.jsx)(j,{projects:a,heading:"Portfolio"})})})},g=function(){var e=Object(i.useState)(""),t=Object(n.a)(e,2),a=t[0],s=t[1],c=Object(i.useState)(""),r=Object(n.a)(c,2),o=r[0],d=r[1],h=Object(i.useState)(""),j=Object(n.a)(h,2),p=j[0],b=j[1],u=Object(i.useState)(""),m=Object(n.a)(u,2),x=m[0],O=m[1],f=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return Object(l.jsx)("div",{className:"contact",children:Object(l.jsxs)("section",{class:"maincontent",children:[Object(l.jsx)("h2",{children:"Contact"}),Object(l.jsx)("div",{class:"textcont",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.match(f)?(O(""),alert("Submitted..."),s(""),d(""),b("")):O("invalid")},children:[Object(l.jsx)("label",{children:"Name:"}),Object(l.jsx)("input",{type:"text",required:!0,value:a,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("label",{children:"Email address:"}),Object(l.jsx)("input",{type:"text",required:!0,value:o,onChange:function(e){d(e.target.value),O("")}}),x&&Object(l.jsx)("p",{className:"invalid",children:"Email is invalid. Enter a valid email and resubmit."}),Object(l.jsx)("label",{children:"Message:"}),Object(l.jsx)("textarea",{required:!0,value:p,onChange:function(e){return b(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})})]})})},v=function(){return Object(l.jsx)("div",{className:"resume",children:Object(l.jsxs)("section",{class:"maincontent",children:[Object(l.jsx)("h2",{children:"Resume"}),Object(l.jsxs)("div",{class:"textcont",children:[Object(l.jsx)("p",{children:"??????"}),Object(l.jsx)("p",{children:"??????"}),Object(l.jsx)("p",{children:"??????"}),Object(l.jsx)("p",{children:"??????"}),Object(l.jsx)("p",{children:"??????"}),Object(l.jsx)("p",{children:"??????"}),Object(l.jsx)("p",{children:"??????"}),Object(l.jsx)("p",{children:"??????"}),Object(l.jsx)("p",{children:"??????"}),Object(l.jsx)("p",{children:"??????"}),Object(l.jsx)("p",{children:"??????"}),Object(l.jsx)("p",{children:"??????"})]})]})})},y=a(2);var w=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("section",{id:"subtitlearea",children:[Object(l.jsx)("figure",{}),Object(l.jsxs)("p",{id:"subtitle",children:["Web developer and ",Object(l.jsx)("br",{})," technical content specialist"]})]}),Object(l.jsx)("main",{children:Object(l.jsxs)(y.c,{children:[Object(l.jsx)(y.a,{exact:!0,path:"/mjl_reactportfolio/portfolio",children:Object(l.jsx)(f,{})}),Object(l.jsx)(y.a,{exact:!0,path:"/mjl_reactportfolio/contact",children:Object(l.jsx)(g,{})}),Object(l.jsx)(y.a,{exact:!0,path:"/mjl_reactportfolio/resume",children:Object(l.jsx)(v,{})}),Object(l.jsx)(y.a,{exact:!0,path:"/mjl_reactportfolio/",children:Object(l.jsx)(h,{})})]})})]})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),s(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),k()}},[[29,1,2]]]);
//# sourceMappingURL=main.e6fe5733.chunk.js.map