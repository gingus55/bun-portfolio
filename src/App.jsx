import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Splash from "./components/Splash";

function App() {
  return (
    <>
      <div className="flex-col ">
        <Nav />
        <Splash />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
