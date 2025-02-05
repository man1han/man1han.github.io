import { useParams, useNavigate } from 'react-router-dom';
import { projectCards } from '../../assets/data/data'; // Import the same data

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
    const project = projectCards.find((p) => p.slug === projectSlug);

    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <div className="project-details">
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <h3>Technologies Used</h3>
            <ul>
                {project.stack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <button onClick={handleBackClick} className="back-button">← Back</button>
        </div>
    );
}

export default ProjectDetails;