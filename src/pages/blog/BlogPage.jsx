import { useParams, useNavigate } from 'react-router-dom';
import { blogCards } from '../../assets/data/data'; // Import the same data
import './blogPage.css'
import './blog.css'
import CaptionedImage from '../../components/CaptionedImage';

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
        <div className="blog-page container">
            <div className="blog-title">
                <button onClick={handleBackClick} className="back-button">← Back</button>
                <h1>{blog.title}</h1>
                <div className="blog-tags">
                    {
                        blog.tags.map((tags, index) => (
                            <p>{tags}</p>))
                    }
                </div>
            </div>
            <div className="blog-content">
                {blog.content.map((block, index) => {
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

        </div>
    );
}

export default BlogPage;