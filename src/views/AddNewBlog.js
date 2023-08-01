import './Blog.scss'
import { useState } from 'react';
import axios from 'axios';
const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = async () => {
        if (!title || !content) {
            alert('Missing neccesary information')
            return;
        }
        let data = {
            title:title,
            body: content,
            id: 101,
        }
    
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts',data)
        
        if(res && res.data ){

            let newBlog = res.data;
            props.handleAddNew(newBlog)
        }
    }

   



    return (<div className="add-new-container">
        <div className="text-add-new"> ---- Add New Blog ----</div>
        <div className='input-data'>
            <label>Title: </label>
            <input type='text'
                value={title}
                onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className='input-data'>
            <label>Content: </label>
            <input type='text'
                value={content}
                onChange={(event) => setContent(event.target.value)} />
        </div>
        <button onClick={handleSubmit}>Submit</button>

    </div>)
}

export default AddNewBlog;