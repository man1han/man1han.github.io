import React from 'react'
import Landing from './components/landing/Landing'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
// import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import NavProvider from './context/NavContext'

const App = () => {
    return (
        <div>
            <NavProvider>
                <Navbar />
                <Landing />
                <About />
                <Blog />
                {/* <Skills /> */}
                <Projects />
                <Contact />
            </NavProvider>
        </div>
    )
}

export default App