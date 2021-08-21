// import logo from './logo.svg';
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// require('dotenv').config();



function App() {

  // const puburl = process.env.PUBLIC_URL;
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <section id="subtitlearea">
          <figure>
          </figure>
          <p id="subtitle">Web developer and <br /> technical content specialist</p>
        </section>

        <div className="content">
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/portfolio'}>
            <Portfolio />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/contact'}>
            <Contact />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/resume'}>
            <Resume />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/'}>
            <Aboutme />
          </Route>
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;