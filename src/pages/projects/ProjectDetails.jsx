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
                    <h3>Background and Motivation</h3>
                    <p>{project.background}</p>
                </div>
                <div className="project-meta">
                    <div className="project-timeline">
                        <h5>Timeline</h5>
                        <p>{project.timeline}</p>
                    </div>
                    <div className="project-stack">
                        <h5>Tech Stack</h5>
                        <div className='project-stack-in'>
                            {project.stack.map((stacks, index) => (
                                <div key={index}  >
                                    <p>{stacks}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="project-skills">
                        <h5>Skills</h5>
                        <div className='project-skills-in'>
                            {project.skills.map((skills, index) => (
                                <div key={index}>
                                    <p>{skills}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="project-links">
                        {project.github || project.demo ? (
                            <>
                                <h5>Links</h5>
                                <div className="project-links-in">
                                    {project.github && <CTA text={'Github'} link={project.github} />}
                                    {project.demo && <CTA text={'Demo'} link={project.demo} />}
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="project-dnd">
                <h3>Design and Developement</h3>
                {project.dnd.map((block, index) => {
                    if (block.type === "text") {
                        return <p key={index}>{block.data}</p>;
                    } else if (block.type === "image") {
                        return <CaptionedImage key={index} text={block.alt} link={block.data} />;
                    }
                    else if (block.type === "heading") {
                        return <h5 key={index}>{block.data}</h5>
                    }
                    return null;
                })}
            </div>
            <div className="project-challenges">
                <h3>Challenges</h3>
                {project.challenges.map((block, index) => {
                    if (block.type === "text") {
                        return <p key={index}>{block.data}</p>;
                    } else if (block.type === "image") {
                        return <CaptionedImage key={index} text={block.alt} link={block.data} />;
                    }
                    else if (block.type === "heading") {
                        return <h5 key={index}>{block.data}</h5>
                    }
                    return null;
                })}
            </div>
            <div className="project-results">
                <h3>Results</h3>
                {project.results.map((block, index) => {
                    if (block.type === "text") {
                        return <p key={index}>{block.data}</p>;
                    } else if (block.type === "image") {
                        return <CaptionedImage key={index} text={block.alt} link={block.data} />;
                    }
                    else if (block.type === "heading") {
                        return <h5 key={index}>{block.data}</h5>
                    }
                    else if (block.type === "audio") {
                        return <audio controls key={index} src={block.data}></audio>
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default ProjectDetails;