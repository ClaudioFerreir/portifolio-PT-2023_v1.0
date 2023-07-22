import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import ProjectsContainer from './components/ProjectsContainer'
import "./styles/components/app.sass";

function App() {

  return (
    <div id="portfolio">
      <h1>Cláudio Ferreira</h1>
      <Sidebar />
      <MainContent />
      <ProjectsContainer />
    </div>
  )
}

export default App
