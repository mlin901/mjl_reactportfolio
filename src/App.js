// import logo from './logo.svg';
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
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