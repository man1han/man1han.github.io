import { useParams, useNavigate } from 'react-router-dom';
import { blogCards } from '../../assets/data/data'; // Import the same data

function BlogPage() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        navigate('/blog');

        setTimeout(() => {
            const container = document.querySelector('.container'); // Get container
            if (container && scrollPosition) {
                container.scrollTo(0, parseInt(scrollPosition, 10)); // Restore container scroll
            }
        }, 100);
    };
    const { blogSlug } = useParams();
    const blog = blogCards.find((b) => b.slug === blogSlug);

    if (!blog) {
        return <h2>Project not found</h2>;
    }

    return (
        <div className="blog-page">
            <img src={blog.image} alt={blog.title} className="blog__img" />
            <div className="blog__text">

                <div className="blog__time">{blog.time} read</div>
                <h4>{blog.title}</h4>
                <div className="topics">
                    {
                        blog.tags.map((tags, index) => (
                            <div className="topic">{tags}</div>))
                    }
                </div>
                <div className='blog__desc'>{blog.description}</div>


            </div>
            <button onClick={handleBackClick} className="back-button">← Back</button>
        </div>
    );
}

export default BlogPage;