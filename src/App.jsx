import './App.css'
import ConstellationBackground from './components/ConstellationBackground.jsx'
import Navbar from './components/Navbar.jsx'
import Hakkimda from './sayfalar/Hakkimda.jsx'
import Projelerim from './sayfalar/Projelerim.jsx'
import Contact from './sayfalar/Contact.jsx'
import { Routes, Route } from 'react-router-dom'
import Anasayfa from './sayfalar/Anasayfa.jsx'
import DahaFazlaHakkimda from './sayfalar/DahaFazlaHakkimda.jsx'

function App() {
  return (
    <div className="app-shell">
      <ConstellationBackground />
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/hakkimda" element={<Hakkimda />} />
          <Route path="/daha-fazla-hakkimda" element={<DahaFazlaHakkimda />} />
          <Route path="/projelerim" element={<Projelerim />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
