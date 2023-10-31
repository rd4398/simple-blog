import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogPosts] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    // Dependency array used to control when useEffect runs
    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
        .then(response => {
            if(!response.ok) {
                throw Error('Could not fetch the data for the requested resource')
            }
            return response.json();
        })
        .then(data => {
            setBlogPosts(data);
            setIsPending(false);
            setError(null)
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message)
        })
        }, 1000)
    }, [])   

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending  && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;