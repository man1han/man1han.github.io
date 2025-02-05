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
import ProjectDetails from './pages/projects/ProjectDetails';
import Artworks from './pages/artworks/Artworks'
import Blog from './pages/blog/Blog'
import BlogPage from './pages/blog/BlogPage';
import Socials from './components/Socials';

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Landing/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/projects/:projectSlug" element={<ProjectDetails />} />
                <Route path="/artworks" element={<Artworks/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blogs/:blogSlug" element={<BlogPage />} />
            </Routes>
            <Socials/>
        </Router>
    )
}

export default App