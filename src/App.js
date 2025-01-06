import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      {/* <Certifications/> */}
      <Contact/>
    </div>
  );
}

export default App;
