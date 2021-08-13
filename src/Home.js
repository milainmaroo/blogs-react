import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Title A", body: "This is about A", author: "norine", id: 1},
        {title: "Title B", body: "This is about B", author: "john", id: 2},
        {title: "Title C", body: "This is about C", author: "penny", id: 3}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs.filter(blog => blog.author === 'norine')} title="Norine Blogs" />
        </div>
     );
}

 
export default Home;