import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Parallax from "./components/Parallax";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Splash from "./components/Splash";

function App() {
  return (
    <>
      <div className="flex-col ">
        <Nav />
        <Splash />
        <Parallax />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
