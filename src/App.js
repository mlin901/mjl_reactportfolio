// import logo from './logo.svg';
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
          <Navbar />
        <section id="subtitlearea">
          <figure></figure>
          <p id="subtitle">Web developer and <br /> technical content specialist</p>
        </section>

        <main>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/portfolio'}>
              <Portfolio />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/contact'}>
              <Contact />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/resume'}>
              <Resume />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/'}>
              <Aboutme />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;