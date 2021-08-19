// import logo from './logo.svg';
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <Aboutme /> */}
        {/* <Contact /> */}
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;



{/* <header className="App-header">
<h1>This is a test</h1>
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}