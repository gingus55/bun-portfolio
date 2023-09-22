import "./App.css";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Splash from "./components/Splash";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Splash />
        <Projects />
      </div>
    </>
  );
}

export default App;
