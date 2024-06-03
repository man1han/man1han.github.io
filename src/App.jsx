import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Landing from './pages/landing/Landing'
import Navbar from './components/navbar/Navbar'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Artworks from './pages/artworks/Artworks'
import Writings from './pages/writings/Writings'

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Landing/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/artworks" element={<Artworks/>}/>
                <Route path="/writings" element={<Writings/>}/>
            </Routes>
        </Router>
    )
}

export default App