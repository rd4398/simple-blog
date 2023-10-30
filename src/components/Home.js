import { useState} from 'react';

const Home = () => {

    const [blogPosts, setBlogPosts] = useState([
        { title: 'The first blog', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'The Evening Party', body: 'lorem ipsum...', author: 'rohan', id: 2},
        { title: 'Trending React', body: 'lorem ipsum...', author: 'sam', id: 3},
    ]);

    return (
        <div className="home">
            {blogPosts.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default Home;