import { useState} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogPosts] = useState([
        { title: 'The first blog', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'The Evening Party', body: 'lorem ipsum...', author: 'rohan', id: 2},
        { title: 'Trending React', body: 'lorem ipsum...', author: 'sam', id: 3},
    ]);

    return (
        <div className="home">
            <BlogList blogs = {blogs} title="All Blogs"/>
        </div>
    );
}

export default Home;