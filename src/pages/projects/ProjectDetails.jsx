import { useParams, useNavigate } from 'react-router-dom';
import { projectDetails } from '../../assets/data/projectsData';
import './projectDetails.css'
import './projects.css'
import CaptionedImage from '../../components/CaptionedImage';
import CTA from '../../components/CTA'

function ProjectDetails() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        navigate('/projects');

        setTimeout(() => {
            const container = document.querySelector('.container'); // Get container
            if (container && scrollPosition) {
                container.scrollTo(0, parseInt(scrollPosition, 10)); // Restore container scroll
            }
        }, 100);
    };
    const { projectSlug } = useParams();
    const project = projectDetails.find((p) => p.slug === projectSlug);

    if (!project) {
        return <div className="project-details container">
            <div className="project-details-title">
                <button onClick={handleBackClick} className="back-button">← Back</button>
                <h2>Project not found</h2>
            </div>
        </div>

    }

    return (
        <div className="project-details container">
            <div className="project-details-title">
                <button onClick={handleBackClick} className="back-button">← Back</button>
                <h1>{project.title}</h1>
            </div>
            <CaptionedImage text={project.description} link={project.image}></CaptionedImage>

            <div className="project-first">
                <div className="project-background">
                    <h6>Background and Motivation</h6>
                    <p>{project.background}</p>
                </div>
                <div className="project-meta">
                    <div className="project-timeline">
                        <h6>Timeline</h6>
                        <p>{project.timeline}</p>
                    </div>
                    <div className="project-stack">
                        <h6>Tech Stack</h6>
                        <div className='project-stack-in'>
                            {project.stack.map((stacks, index) => (
                                <div key={index}  >
                                    <p>{stacks}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="project-skills">
                        <h6>Skills</h6>
                        <div className='project-skills-in'>
                            {project.skills.map((skills, index) => (
                                <div key={index}>
                                    <p>{skills}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="project-links">
                        <h6>Links</h6>
                        <div className="project-links-in">
                            <CTA text={'Github'} link={project.github} />
                            <CTA text={'Demo'} link={project.demo} />
                        </div>

                    </div>
                </div>
            </div>
            <div className="project-dnd">
                <h6>Design and Developement</h6>
                <p>{project.dnd}</p>
            </div>
            <div className="project-challenges">
                <h6>Challenges</h6>
                <p>{project.challenges}</p>
            </div>
            <div className="project-results">
                <h6>Results</h6>
                <p>{project.results}</p>
            </div>
        </div>
    );
}

export default ProjectDetails;