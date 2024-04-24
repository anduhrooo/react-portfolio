import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header' 
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
// import styles.css file from styles folder, flows down to children
import './styles/styles.css'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<AboutMe />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App