# mjl-reactportfolio


## Contents

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Description](#description)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[What comes next?](#what-comes-next)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Questions](#questions)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Notes on building and deploying](#notes-on-building-and-deploying)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Screenshot](#screenshot)<br/>

## Description

This is the GitHub repository for Matt Linder's portfolio. The published portfolio is on GitHub Pages: https://mlin901.github.io/mjl_reactportfolio/.

This is a React-based rewrite of an earlier version of the porfolio, so many of the changes are under the hood. There are, however, some more visible changes. For example, the portfolio now has four pages created by React: 

- An "About me" page with my brand statement
- A Portfolio page that highlights recent projects
- A Contact page that is currently under construction. (It includes a contact form, but that form does not result in a message.)
- A Resume page that lists my full stack technology competencies and provides a link to my resume

Additionally, the footer features GitHub, LinkedIn, and Stack Overflow links, as well as contact information. 

## What comes next?

The portfolio needs to be more responsive. A clean, simple integration of Bootstrap elements would really help, and that's what I plan to do next. After that, I plan to do the following:
- Revise/improve the projects featured on the Portfolio page
- Add the Parks & Treck project (https://github.com/mlin901/nationalParks) to the Portfolio page
- Finish the contact form so that it forwards information (and restore the Contact link in the navbar)
- Fix routing issues. I probably need to implement one of the fixes listed here; https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing.
- Improve alignment of Contact heading and links in footer
- Improve design in general (color, item placement, etc.)

## Questions

Send questions to mjlinder218@gmail.com. 
For more information about the developer, see https://github.com/mlin901.

## Notes on building and deploying

The instructions in https://create-react-app.dev/docs/deployment/#github-pages were used to configure this project to be deployed to GitHub pages.
To deploy changes, 

1. Check out master branch.
2. Make change to source code. 
3. Build (npm run build)
4. Deploy (npm run deploy)
5. Check the site (https://mlin901.github.io/mjl_reactportfolio/). Note that it sometimes takes a minute or two for deployed changes to appear on the site. 

## Screenshot 

![React portfolio screenshot](./ReactPortfolioScreenCap.jpg)
