import { Route, Routes } from "react-router-dom"
import Agence from "./pages/Agence"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>

    </div>
  )
}

export default App
