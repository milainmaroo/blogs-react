import { useState } from 'react';
import { useHistory } from 'react-router';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('norine');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            setIsPending(false);
            history.push("/");
        });
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Blog body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="norine">Norine</option>
                    <option value="penny">Penny</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;