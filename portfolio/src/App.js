import NavBar from './components/layout/nav/Navbar'
import SobreMim from './components/sobremim/Sobremim'
import Presentation from './components/presentation/Presentation'
import Skills from './components/skills/Skills'

function App() {
  return (
    <div>
      <NavBar />
      <Presentation />
      <SobreMim />
      <Skills />
    </div>
  );
}

export default App;
